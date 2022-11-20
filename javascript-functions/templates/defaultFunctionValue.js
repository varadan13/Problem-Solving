const superImportantFunction = (options) => {
  // options may have a helper function
  // but in case there is no helper function
  // then I need to have a fallback function
  // i can do it like so

  const { helper = () => console.log("fallback helper") } = options;
  helper();
};

superImportantFunction({});
superImportantFunction({
  helper: () => console.log("I come from function parameter"),
});
