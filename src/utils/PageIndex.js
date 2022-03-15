const pageIndex = ({count, limit})=> {
    if(count == 0) return 0
    return Math.ceil(count / limit)
}

module.exports = pageIndex