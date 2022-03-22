/**
 * 자판기 클래스
 * @class
 * @public
 */
class VendingMachine {
  constructor() {
    /** @member {Map<Number, Object>} */
    this.menu = new Map();
  }
  /**
   * 메뉴를 추가한다.
   * @constructor
   * @param {string} menuName - 추가 할 메뉴 이름
   * @param {number} menuCount - 추가 할 메뉴 개수
   * @param {number} menuPrice - 추가 할 메뉴 가격
   * @return {string} - 추가 된 메뉴 정보
   */
  setItem(menuName, menuCount, menuPrice) {}
  /**
   * 메뉴를 구매한다.
   * @constructor
   * @param {number} menuPrice - 구매 할 메뉴 가격
   * @return {string} - 구매 한 메뉴 정보
   */
  getItem(menuPrice) {}
}
