

//遍历并输出localStorage里存储的名字和值
export const getLocalStorageList = function() {
    for (var i = 0; i < localStorage.length; i++) {
        console.log('localStorage里存储的第' + i + '条数据的名字为：' + localStorage.key(i) + ',值为：' + localStorage.getItem(localStorage.key(i)));
      }
};


export const getPlatform = function () {
    let agent = navigator.userAgent;
    if (agent.indexOf('Android') > -1 || agent.indexOf('Adr') > -1) {
        return 'android';
    } else if (!!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        return 'ios';
    }
    return 'unknown';
}



