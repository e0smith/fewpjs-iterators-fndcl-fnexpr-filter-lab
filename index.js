function findMatching(drivers, string) {
    let match = drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase();
    });
    return match;
};

function fuzzyMatch(drivers, string) {
    let match = drivers.filter(driver => {
        return driver.startsWith(string)
    });
    return match;
};

function matchName(drivers, string) {
    let match = drivers.filter(driver => {
        return driver.name === string
    });
    return match;
};