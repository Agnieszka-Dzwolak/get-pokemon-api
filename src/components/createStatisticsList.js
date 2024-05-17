const createStatisticsList = (stats) => {
    const list = document.createElement('ul');
    list.id = 'stat-list';

    stats.forEach((stat) => {
        const item = document.createElement('li');
        item.innerText = `${stat.stat.name} : ${stat.base_stat}`;

        list.append(item);
    });
    return list;
};

export default createStatisticsList;
