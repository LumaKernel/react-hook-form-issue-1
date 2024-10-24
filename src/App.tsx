import { useForm, ResolverError } from "react-hook-form"


type Inputs = {
  example: string
  exampleRequired: string
}

function App() {
  const {} = useForm<Inputs>({
    resolver: () => {
      const errors: ResolverError<Inputs>['errors'] = {};
      errors.root = {
        message: 'This is a root error',
      };

      // Same Error
      // const errors: ResolverError<Inputs>['errors'] = {
      //   root: {
      //     message: 'This is a root error',
      //   },
      // };

      return {
        values: {},
        errors,
      };
    },
  });

  return <div>App</div>;
}

export default App
