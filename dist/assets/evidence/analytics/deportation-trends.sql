-- English: Reproduce annual totals and year-over-year changes from the cleaned historical course CSV in SQLite.
-- 中文：在 SQLite 中从已清洗的历史课程 CSV 复算年度总量与同比变化。
-- English: Import the CSV into deportation_records, preserving the Year and numberofpeople columns.
-- 中文：把 CSV 导入 deportation_records，并保留 Year 与 numberofpeople 字段。
WITH yearly AS (
    SELECT
        CAST(Year AS INTEGER) AS year,
        COUNT(*) AS archive_rows,
        SUM(CAST(numberofpeople AS INTEGER)) AS recorded_people
    FROM deportation_records
    GROUP BY CAST(Year AS INTEGER)
),
comparison AS (
    SELECT
        year,
        archive_rows,
        recorded_people,
        LAG(year) OVER (ORDER BY year) AS previous_year,
        LAG(recorded_people) OVER (ORDER BY year) AS previous_total
    FROM yearly
)
SELECT
    year,
    archive_rows,
    recorded_people,
    CASE WHEN previous_year = year - 1
         THEN ROUND(100.0 * (recorded_people - previous_total) / NULLIF(previous_total, 0), 2)
    END AS year_over_year_pct
FROM comparison
ORDER BY year;
