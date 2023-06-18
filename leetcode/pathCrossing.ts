/**
 * 
 * @description : Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.
 */


function isPathCrossing(path: string): boolean {
    let x = 0;
    let y = 0;
    let coords = new Set();
    coords.add(`${x},${y}`);
    for (let i = 0; i < path.length; i++) {
        switch (path[i]) {
            case 'N':
                y += 1;
                break;
            case 'S':
                y -= 1;
                break;
            case 'E':
                x += 1;
                break;
            case 'W':
                x -= 1;
                break;
        }
        if (coords.has(`${x},${y}`)) {
            return true;
        } else {
            coords.add(`${x},${y}`);
        }
    }
    return false;
}
