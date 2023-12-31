# Integração Automatizada com Swagger e Orval

Este README fornece um guia sobre como utilizar e integrar automaticamente o `Swagger` em suas aplicações frontend desenvolvidas com React, Next.js, Vue, Angular e Svelte, utilizando a poderosa ferramenta `Orval`. Com a integração automatizada do Swagger, você pode economizar tempo e garantir que sua documentação de API esteja sempre atualizada em suas aplicações.

## O que é o Orval?

O Orval é uma biblioteca JavaScript que simplifica a integração do Swagger em projetos frontend. Ele oferece suporte para várias estruturas, incluindo React, Vue, Angular e Svelte, e automatiza a geração de código e a documentação da API a partir de uma especificação do Swagger. Isso permite que você mantenha seus aplicativos atualizados com as mudanças na API sem a necessidade de atualizações manuais.

## Pré-requisitos

Antes de começar, certifique-se de ter o seu projeto React, Next.js, Vue, Angular ou Svelte já configurado, ou se quiser pode ver mais detalhes nos exemplos acima.

## Instalação do Orval

Para começar, instale o Orval em seu projeto. Você pode fazê-lo executando o seguinte comando no diretório raiz do seu projeto:

```bash
npm install --save-dev orval
```

## Configuração do Orval

Agora, você precisa configurar o Orval para o seu projeto. Crie um arquivo de configuração `orval.config.js` no diretório raiz do seu projeto com a seguinte estrutura:

```javascript
// orval.config.cjs

module.exports = {
  backend: {
    output: {
      mode: 'single', // Crie apenas um único arquivo contento todas as configurações

      client: 'react-query', // O Cliente a ser usado
      target: path.resolve(__dirname, './src/query.ts'), // Caminho de saída para o arquivo gerado
    },

    input: {
      target: require.resolve('./swagger.json') // URL da especificação do Swagger
    }
  }
};
```

Substitua `'./swagger.json'` pela URL da especificação do Swagger da sua API.

Agora adicione um script do orval no seu `package.json`

```bash
"orval": "orval --config ./orval.config.cjs"
```

## Geração Automática de Código

Agora, você pode gerar automaticamente o código a partir da especificação do Swagger usando o Orval. Execute o seguinte comando no diretório raiz do seu projeto:

```bash
npm run orval
```

Isso criará um arquivo `query.ts` (ou o caminho especificado em `backend -> target`) em seu projeto, contendo definições de tipos e funções para interagir com sua API.

## Uso em Projetos

Depois de gerar o código com o Orval, você pode usá-lo em seus projetos frontend. Importe as funções e tipos gerados em seus componentes ou serviços para começar a fazer chamadas à API.

Aqui está um exemplo de como usar as funções geradas em um componente React:

```javascript
import { useGetUsers } from './query';

function MyComponent() {
  const { data, isError, isLoading } = useGetUsers();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error.message}</p>;
  }

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

## Atualização Automática da Documentação da API

Com o Orval, você pode manter a documentação da API atualizada automaticamente em seu aplicativo. Sempre que houver mudanças na especificação do Swagger, basta executar novamente o comando `npm run orval` para regenerar o código e atualizar a documentação em seu projeto.

## Conclusão

A integração automatizada do Swagger em aplicações usando o Orval simplifica o processo de desenvolvimento e garante que sua aplicação frontend esteja sempre em conformidade com a API. Aproveite essa ferramenta poderosa para economizar tempo e evitar erros manuais na integração do Swagger.

Para obter mais informações sobre o Orval e suas opções de configuração, consulte a documentação oficial em [link para a documentação oficial](https://orval.dev/overview).

**Aviso:** Lembre-se de manter suas dependências e código atualizados regularmente para evitar problemas de compatibilidade.
