export interface FormatGroup {
    name: string;
    layouts: Format[];
}

export interface Format {
    layout: string;
    description: string;
    examples: string[];
}

export const formats: FormatGroup[] = [
    {
        name: "Year",
        layouts: [
            {
                layout: "2006",
                description: "Year with 4 digits",
                examples: ["1990", "2014"]
            },
            {
                layout: "06",
                description: "Year with 2 digits",
                examples: ["90", "14"]
            }
        ]
    },
    {
        name: "Month",
        layouts: [
            {
                layout: "Jan",
                description: "Month name, abbreviated",
                examples: ["Jan", "Dec"]
            },
            {
                layout: "January",
                description: "Month name",
                examples: ["January", "December"]
            },
            {
                layout: "01",
                description: "Month number with 2 digits",
                examples: ["01", "12"]
            },
            {
                layout: "1",
                description: "Month number",
                examples: ["1", "12"]
            }
        ]
    },
    {
        name: "Day of the week",
        layouts: [
            {
                layout: "Mon",
                description: "Day of the week, abbreviated",
                examples: ["Mon", "Sun"]
            },
            {
                layout: "Monday",
                description: "Day of the week",
                examples: ["Monday", "Sunday"]
            }
        ]
    },
    {
        name: "Day of the month",
        layouts: [
            {
                layout: "2",
                description: "Day of the month",
                examples: ["2", "31"]
            },
            {
                layout: "_2",
                description: "Day of the month with leading zero",
                examples: ["02", "31"]
            },
            {
                layout: "02",
                description: "Day of the month with leading zero",
                examples: ["02", "31"]
            }
        ]
    },
    {
        name: "Day of the year",
        layouts: [
            {
                layout: "__2",
                description: "Day of the year",
                examples: ["2", "365"]
            },
            {
                layout: "002",
                description: "Day of the year with leading zeros",
                examples: ["002", "365"]
            },
        ]
    },
    {
        name: "Hour",
        layouts: [
            {
                layout: "15",
                description: "Hour (24-hour clock)",
                examples: ["15", "23"]
            },
            {
                layout: "3",
                description: "Hour (12-hour clock)",
                examples: ["3", "11"]
            },
            {
                layout: "03",
                description: "Hour (12-hour clock) with leading zero",
                examples: ["03", "11"]
            },
        ]
    },
    {
        name: "Minute",
        layouts: [
            {
                layout: "4",
                description: "Minute",
                examples: ["4", "59"]
            },
            {
                layout: "04",
                description: "Minute with leading zero",
                examples: ["04", "59"]
            }
        ]
    },
    {
        name: "Second",
        layouts: [
            {
                layout: "5",
                description: "Second",
                examples: ["5", "59"]
            },
            {
                layout: "05",
                description: "Second with leading zero",
                examples: ["05", "59"]
            }
        ]
    },
    {
        name: "Millisecond",
        layouts: [
            {
                layout: ".000",
                description: "Millisecond",
                examples: [".000", ".999"]
            },
            {
                layout: ".999",
                description: "Millisecond no trailing zeros",
                examples: [".000000", ".999999"]
            },
            {
                layout: ".00",
                description: "Millisecond with 2 digits",
                examples: [".00", ".99"]
            },
            {
                layout: ".0",
                description: "Millisecond with 1 digit",
                examples: [".0", ".9"]
            },

        ]
    },
    {
        name: "AM/PM",
        layouts: [
            {
                layout: "PM",
                description: "AM/PM",
                examples: ["AM", "PM"]
            },
            {
                layout: "pm",
                description: "am/pm",
                examples: ["am", "pm"]
            }
        ]
    },
    {
        name: "Time zone name",
        layouts: [
            {
                layout: "MST",
                description: "Time zone name",
                examples: ["MST", "CET", 'UTC+1']
            },
        ]
    },
    {
        name: "Numeric time zone offsets",
        layouts: [
            {
                layout: "-0700",
                description: "Numeric time zone offset in hours and minutes",
                examples: ["-0700", "+0100"]
            },
            {
                layout: "-07:00",
                description: "Numeric time zone offset in hours and minutes",
                examples: ["-07:00", "+01:00"]
            },
            {
                layout: "-07",
                description: "Numeric time zone offset in hours",
                examples: ["-07", "+01"]
            },
            {
                layout: "-070000",
                description: "Numeric time zone offset in hours, minutes and seconds",
                examples: ["-070000", "+010000"]
            },
            {
                layout: "-07:00:00",
                description: "Numeric time zone offset in hours, minutes and seconds",
                examples: ["-07:00:00", "+01:00:00"]
            }
        ]
    },
    {
        name: "ISO 8601 time zone offsets",
        layouts: [
            {
                layout: "Z0700",
                description: "ISO 8601 time zone offset in hours and minutes",
                examples: ["Z0700", "+0100"]
            },
            {
                layout: "Z07:00",
                description: "ISO 8601 time zone offset in hours and minutes",
                examples: ["Z07:00", "+01:00"]
            },
            {
                layout: "Z07",
                description: "ISO 8601 time zone offset in hours",
                examples: ["Z07", "+01"]
            },
            {
                layout: "Z070000",
                description: "ISO 8601 time zone offset in hours, minutes and seconds",
                examples: ["Z070000", "+010000"]
            },
            {
                layout: "Z07:00:00",
                description: "ISO 8601 time zone offset in hours, minutes and seconds",
                examples: ["Z07:00:00", "+01:00:00"]
            }
        ]
    },
]

