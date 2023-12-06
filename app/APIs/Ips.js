const homeIp = '192.168.100.84';
const workIp = '192.168.0.49';

export const getApiUrl = (useHomeIp) => {
  const baseIp = useHomeIp ? homeIp : workIp;
  return `http://${baseIp}:8000/api/users`;
};
