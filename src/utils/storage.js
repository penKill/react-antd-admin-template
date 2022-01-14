/**
 * 封装了localStorage和sessionStorage的使用, 可直接保存, 获取对象.
 *
 * @param name
 * @param value
 */
//全局token名称
const token_name = "token";
const storage = {}

// 获取本地的token
storage.getToken = () => {
    return storage.getSession(token_name)
}

//设置token
storage.setToken = value => {
    storage.remove(token_name)
    return storage.setSession(token_name, value)
}
/**
 * 设置session级别的值
 * @param name
 * @param value
 */
storage.setSession = (name, value) => {
    if (typeof sessionStorage === 'object') {
        let data = value;
        if (typeof value !== 'string') {
            if (data === undefined) {
                data = null;
            } else {
                data = JSON.stringify(data);
            }
        }
        sessionStorage.setItem(name, data);
    }
}

//获取session范围的值
storage.getSession = name => {
    if (typeof sessionStorage === 'object') {
        let data = sessionStorage.getItem(name);
        try {
            return JSON.parse(data);
        } catch (e) {
            return data;
        }
    }
    return null;
}

//设置全局的值
storage.setLocal = (name, value) => {
    if (typeof localStorage === 'object') {
        let data = value;
        if (typeof value !== 'string') {
            if (data === undefined) {
                data = null;
            } else {
                data = JSON.stringify(data);
            }
        }
        localStorage.setItem(name, data);
    }
}

//获取全局的值
storage.getLocal = name => {
    if (typeof localStorage === 'object') {
        let data = localStorage.getItem(name);
        try {
            return JSON.parse(data);
        } catch (e) {
            return data;
        }
    }
    return null;
}

//删除全局的值
storage.remove = name => {
    if (typeof sessionStorage === 'object') {
        if (sessionStorage.getItem(name)) {
            sessionStorage.removeItem(name);
        }
    }
    if (typeof localStorage === 'object') {
        if (localStorage.getItem(name)) {
            localStorage.removeItem(name);
        }
    }
}

//删除所有的值
storage.clear = () => {
    if (typeof sessionStorage === 'object') {
        sessionStorage.clear();
    }
    if (typeof localStorage === 'object') {
        localStorage.clear();
    }
}

export default storage
