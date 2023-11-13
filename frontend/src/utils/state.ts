interface ApiURL {
  baseUrl: string;
}

interface State {
  api: ApiURL;
}

export const state: State = {
    api: {
      baseUrl: 'http://localhost:3000/api/v1/',
    },
  };