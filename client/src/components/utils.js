export const sortdData = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a, b) => (a.date) > (b.date) ? -1 : 1)
}


