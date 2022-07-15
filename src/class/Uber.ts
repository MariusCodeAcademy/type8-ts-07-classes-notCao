/* eslint-disable class-methods-use-this */
class Uber {
  // static savybe priklauso klasei o ne individualiems objektams
  private static _activeRides: number = 0;

  start() {
    console.log('ub start');
    Uber._activeRides += 1;
  }
  stop() {
    Uber._activeRides -= 1;
  }
  // static todel kad gautume iskviete Uber.activeRides
  static get activeRides() {
    return Uber._activeRides;
  }
}

const ubArr: Uber[] = [new Uber(), new Uber(), new Uber()];
ubArr.forEach((uObj) => uObj.start());
ubArr[1].stop();

// Uber.activeRides = 50;

console.log('Uber.activeRides ===', Uber.activeRides);
// ub1.activeRides;
// const ub15 = new Uber();
