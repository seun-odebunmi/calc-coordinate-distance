export default class calculator {
  static GetClosestPoints(coords: Array<Array<number>>): Array<Array<number>> {
    const result = coords.reduce(
      (prevVal, coord, i) => {
        const currDist = coords[i + 1]
          ? this.GetDistance(coord, coords[i + 1])
          : prevVal.distance;

        return currDist < prevVal.distance
          ? { points: [coord, coords[i + 1]], distance: currDist }
          : prevVal;
      },
      {
        points: [coords[0], coords[1]],
        distance: this.GetDistance(coords[0], coords[1])
      }
    );

    return result.points;
  }

  static GetFarthestPoints(coords: Array<Array<number>>): Array<Array<number>> {
    const result = coords.reduce(
      (prevVal, coord, i) => {
        const currDist = coords[i + 1]
          ? this.GetDistance(coord, coords[i + 1])
          : prevVal.distance;

        return currDist > prevVal.distance
          ? { points: [coord, coords[i + 1]], distance: currDist }
          : prevVal;
      },
      {
        points: [coords[0], coords[1]],
        distance: this.GetDistance(coords[0], coords[1])
      }
    );

    return result.points;
  }

  static GetDistance(a: Array<number>, b: Array<number>): number {
    let [x1, y1] = a;
    let [x2, y2] = b;

    return Math.sqrt(Math.pow(2, x1 - x2) + Math.pow(2, y1 - y2));
  }
}
