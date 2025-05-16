---
sidebar_position: 9
---

# INTERVAL

The `INTERVAL` data type in WormSQL is used to represent a period of time. In accordance with the ANSI SQL standard, several subtypes of `INTERVAL` can be used to represent different units of time, such as years, months, days, hours, minutes, and seconds. These subtypes are:

- YEAR
- YEAR TO MONTH
- MONTH
- DAY
- DAY TO HOUR
- DAY TO MINUTE
- DAY TO SECOND
- HOUR
- HOUR TO MINUTE
- HOUR TO SECOND
- MINUTE
- MINUTE TO SECOND
- SECOND

## INTERVAL Subtypes and Syntax

Here are some examples of how to use different `INTERVAL` subtypes:

- YEAR: `INTERVAL '5' YEAR`
- YEAR TO MONTH: `INTERVAL '5-3' YEAR TO MONTH`
- MONTH: `INTERVAL '6' MONTH`
- DAY: `INTERVAL '7' DAY`
- DAY TO HOUR: `INTERVAL '2 12' DAY TO HOUR`
- DAY TO MINUTE: `INTERVAL '2 12:30' DAY TO MINUTE`
- DAY TO SECOND: `INTERVAL '2 12:30:45' DAY TO SECOND`
- HOUR: `INTERVAL '18' HOUR`
- HOUR TO MINUTE: `INTERVAL '18:30' HOUR TO MINUTE`
- HOUR TO SECOND: `INTERVAL '18:30:45' HOUR TO SECOND`
- MINUTE: `INTERVAL '45' MINUTE`
- MINUTE TO SECOND: `INTERVAL '45:30' MINUTE TO SECOND`
- SECOND: `INTERVAL '30' SECOND`

## Unsupported Conversions

In WormSQL, you cannot convert between different `INTERVAL` subtypes, such as converting 1 MONTH to DAYS or converting YEAR TO MONTH to DAY TO SECOND. These conversions are not supported.

## Conclusion

The `INTERVAL` data type is a powerful way to represent time periods in WormSQL. By following the ANSI SQL standard, you can use a combination of subtypes to represent complex periods of time. Use the `INTERVAL` keyword when creating tables and inserting values to make the most of this data type.