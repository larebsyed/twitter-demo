declare module "react-render-markup" {
  type MarkupComponentProps = {
    splice_id: string;
    children: React.ReactNode;
    insert: boolean;
    delete: boolean;
    ids: string;
    replace: boolean;
  };
  export const Markup: (_: {
    markup: string;
    replace: Record<string, string | React.FC<MarkupComponentProps>>;
  }) => React.ReactElement;

  export default {
    Markup,
  };
}

declare module "fortune-indexeddb" {}

declare module "graphql-genie" {
  type FortuneOptions = {};

  class GraphQLGenie {
    constructor(_: any);
    getFragmentTypes: () => any;
    getDataResolver: () => any;
    getStore: () => any;
    getSchema: () => any;
  }
}
