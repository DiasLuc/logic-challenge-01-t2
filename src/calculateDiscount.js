function applyDiscount(subtotal, discount){
    const total = subtotal - discount;
    return total;
};

module.exports = {
    applyDiscount
}