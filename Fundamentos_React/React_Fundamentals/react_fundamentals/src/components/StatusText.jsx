// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  const status = true;
  return <h4>Status: {status ? "On" : "Off"}</h4>;
};

/* A importação funciona, no entanto o eslint/fast refresh porque o componente não tem nome */
