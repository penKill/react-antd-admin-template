const res = {}

res.ok = res => {
    return res.code === 200
}

res.message = res => {
    return res.msg
}

res.data = res => {
    return res.data
}
export default res