export const iconSelector = (id) => {


    if (id < 250) {
        return 'thunderstorm';
    } else if (300 <= id && id <= 350) {
        return 'sprinkle';
    } else if (500 <= id && id <= 550) {
        return 'rain';
    } else if (600 <= id && id <= 650) {
        return 'snow';
    } else if (700 <= id && id <= 799) {
        return 'fog';
    } else if (id === 800) {
        console.log('써니로 들어옴')
        return 'sunny';
    } else if (801 <= id && id <= 804) {

        return 'cloudy';
    }
}