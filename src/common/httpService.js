import wepy from 'wepy'

const defaultHost = '';

const api = {
  test: {
    url: '/api/weather/json.shtml',
   	auth: false,
   	method: 'GET'
  }
}

const interfaces = {
  async fetch (api, data) {
//	const ext = await wepy.getExtConfig();
  	
  	let formatUrl = api.url;
  	let host =  defaultHost || '';
  	let url = host + formatUrl; 
  	let header = {
      'X-WX-APPID': 'wxc45184645f047fcc'
    }
  	let res = await wepy.request({ url: url, data: data, header: header, method: api.method });
  	return res.data;
  },
  // 测试
  async myTest (data) {
  	return await interfaces.fetch(api.test, data)
  }
  
  
}

export default interfaces;
