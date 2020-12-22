declare global {
  namespace CSS {
    namespace paintWorklet {
      function addModule(url: string): Promise<any>;
    }
  }
}

export {}
