
// DST is observed in certain regions of this time zone between the 2nd Sunday
// in March and the 1st Sunday in November.
// Wikipedia: https://en.wikipedia.org/wiki/Central_Time_Zone

function isDST(date){
    var year = date.getFullYear();
    var dst_start = new Date(year, 2, 14);
    var dst_end = new Date(year, 10, 7);
    dst_start.setDate(14 - dst_start.getDay()); // adjust date to 2nd Sunday
    dst_end.setDate(7 - dst_end.getDay()); // adjust date to the 1st Sunday

    return (date >= dst_start && date < dst_end);
}

exports.isDST = isDST;
