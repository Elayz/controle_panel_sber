import jsonRpcService from './json_rpc.min';

const service = new jsonRpcService("wss://test1.albacore.ru:443", 10000);
console.log(service)
await service.connectWS();