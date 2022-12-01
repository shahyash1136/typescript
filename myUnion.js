var score = 33;
score = 44;
score = "55";
var yash = {
    name: 'yash',
    id: 334
};
yash = { username: 'ys', id: 334 };
/* function getDbId(id: number | string) {
    console.log(`DB id is: ${id}`)
} */
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3"];
var seatAllotment;
