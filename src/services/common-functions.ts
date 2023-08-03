export const calculateAge = (birthDate = "1996-11-04") => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

export const get_date_Il_TZ = () => {
    const date = new Date();
    const timezoneOffsetMinutes = date.getTimezoneOffset();
    const timezoneOffsetMilliseconds = timezoneOffsetMinutes * 60 * 1000;

    // Adjust the date and time based on the desired time zone offset
    const adjustedDate = new Date(date.getTime() + timezoneOffsetMilliseconds + (3 * 60 * 60 * 1000));

    const formattedDate = adjustedDate.toLocaleString('he-IL', {
    timeZone: 'Asia/Jerusalem',
    dateStyle: 'full',
    timeStyle: 'short',
    });

    return formattedDate;
}