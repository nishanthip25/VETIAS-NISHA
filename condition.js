console.log("CONDITIONAL STATEMENT");

var light = "green";

if (light == "red") {
    console.log("Stop");
}
else if (light == "white") {
    console.log("Wait");
}
else if (light == "green") {
    console.log("Go");
}
else {
    console.log("Invalid light colour");
}
console.log("outside if")

console.log("SWITCH STATEMENT");

var signal = "white"
switch(singal)
{
    case "green":
        console.log("Go");
        break;

        case "yellow":
            console.log(wait);
            break;

            case "red" :
                console.log("stop!")
                break;

                default:
                console.log("ivalid singal !");
                break;
}