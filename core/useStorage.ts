const useStorageService = () => {
  const saveTheme = (theme: string) => {
    return theme;
  };

  const resetTheme = () => {};

  return {
    saveTheme,
    resetTheme,
  };
};

export default useStorageService;
