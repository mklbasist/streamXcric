function getThumbnail(url) {
  if (url.includes("youtube.com")) {
    const id = url.split("/embed/")[1];
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  } else if (url.includes("dailymotion.com")) {
    const id = url.split("/video/")[1];
    return `https://www.dailymotion.com/thumbnail/video/${id}`;
  } else if (url.includes("drive.google.com")) {
    const id = url.split("/d/")[1].split("/")[0];
    return `https://drive.google.com/thumbnail?id=${id}`;
  }
  return "";
}

function enterSite() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
  document.querySelector(".yt-bottom-nav").style.display = "flex";
}

function backToPlayers() {
  document.getElementById("playerPage").classList.add("hidden");
  document.getElementById("rootOptions").classList.add("hidden");
  document.getElementById("players").classList.remove("hidden");
  document.getElementById("playerName").innerText = "";
  document.getElementById("centuriesList").innerHTML = "";
  document.querySelectorAll(".player-card").forEach(card => card.style.display = "flex");
}

    const players = {
      root: {
        name: "Joe Root",
         fifties: [
      { title: "1. 72 vs IND, 2012", video: "https://www.dailymotion.com/embed/video/x9pktja" },
      { title: "2. 71 v NZ, 2013", video: "https://www.dailymotion.com/embed/video/x9pkv28" },
      { title: "3. 68 vs AUS, 2013", video: "https://www.dailymotion.com/embed/video/x9pkv22" },
      { title: "4. 87 vs AUS, 2013", video: "https://www.dailymotion.com/embed/video/x9pku6e" },
      { title: "5. 66 v IND, 2014", video: "https://www.dailymotion.com/embed/video/x9pqzci" },
      { title: "6. 56 v IND, 2014", video: "https://www.dailymotion.com/embed/video/x9pqzck" },
      { title: "7. 77 v IND, 2014", video: "https://www.dailymotion.com/embed/video/x9pqzce" },
      { title: "8. 83 v WI, 2015", video: "https://www.dailymotion.com/embed/video/x9pu854" },
      { title: "9. 59 vs WI,  2015", video: "https://www.dailymotion.com/embed/video/x9pp70c" },
      { title: "10. 98 vs NZ,  2015", video: "https://www.dailymotion.com/embed/video/x9pqzx8" },
      { title: "11. 84 vs NZ, 2015", video: "https://www.dailymotion.com/embed/video/x9pw9d2" },
      { title: "12. 60 vs Aus, 2015", video: "https://www.dailymotion.com/embed/video/x9pp79m" },
      { title: "13. 63 v AUS, 2015", video: "https://www.dailymotion.com/embed/video/x9pqy44" },
      { title: "14. 85 vs Pak, 2015", video: "https://www.dailymotion.com/embed/video/x9pp7e8" },
      { title: "15. 88 v PAK, 2015", video: "https://www.dailymotion.com/embed/video/x9pwaea" },
      { title: "16. 71 v PAK, 2015", video: "https://www.dailymotion.com/embed/video/x9pwa6k" },
      { title: "17. 73 vs SA, 2015", video: "https://www.dailymotion.com/embed/video/x9pp7j8" },
      { title: "18. 50 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pnu9o" },
      { title: "19. 76 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pp7tg" },
      { title: "20. 80 vs SL, 2016", video: "https://www.dailymotion.com/embed/video/x9pp89c" },
      { title: "21. 71* v PAK, 2016", video: "https://www.dailymotion.com/embed/video/x9pw9zu" },
      { title: "22. 62 v PAK, 2016", video: "https://www.dailymotion.com/embed/video/x9pw9zs" },
      { title: "23. 56 v BAN, 2016", video: "https://www.dailymotion.com/embed/video/x9pqky6" },
      { title: "24. 100 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pjowm" },
      { title: "25. 100 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pjowm" },
      { title: "26. 100 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pjowm" },
      { title: "27. 100 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pjowm" },
      { title: "28. 78 v SA, 2017", video: "https://www.dailymotion.com/embed/video/x9pu850" },
      { title: "29. 50 v SA, 2017", video: "https://www.dailymotion.com/embed/video/x9pqy42" },
      { title: "30. 52 vs SA, 2017", video: "https://www.dailymotion.com/embed/video/x9pkv2a" },
      { title: "31. 59 v WI, 2017", video: "https://www.dailymotion.com/embed/video/x9pqy46" },
      { title: "32. 100 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pjowm" },
      { title: "33. 51 v AUS, 2017", video: "https://www.dailymotion.com/embed/video/x9pu852" },
      { title: "34. 67 vs Aus,  2017", video: "https://www.dailymotion.com/embed/video/x9pwbyq" },
      { title: "35. 61 vs AUS, 2017", video: "https://www.dailymotion.com/embed/video/x9pnu9m" },
      { title: "36. 83 vs AUS, 2018", video: "https://www.dailymotion.com/embed/video/x9pqy48" },
      { title: "37. 58* vs AUS,  2018", video: "https://www.dailymotion.com/embed/video/x9pwc76" },
      { title: "38. 51 vs NZ, 2018", video: "https://www.dailymotion.com/embed/video/x9pnu9q" },
      { title: "39. 54 v NZ, 2018", video: "https://www.dailymotion.com/embed/video/x9pu7yw" },
      { title: "40. 68 vs Pak, 2018", video: "https://www.dailymotion.com/embed/video/x9pwboi" },
      { title: "41. 80 v IND, 2018", video: "https://www.dailymotion.com/embed/video/x9pu8uw" },
      { title: "42. 57 v AUS, 2019", video: "https://www.dailymotion.com/embed/video/x9pua3y" },
      { title: "43. 77 v AUS, 2019", video: "https://www.dailymotion.com/embed/video/x9pu8uu" },
      { title: "44. 71 v AUS, 2019", video: "https://www.dailymotion.com/embed/video/x9pwcl8" },
      { title: "45. 57 vs AUS, 2019", video: "https://www.dailymotion.com/embed/video/x9pnu9g" },
      { title: "46. 61 v SA, 2019", video: "https://www.dailymotion.com/embed/video/x9pwcl6" },
      { title: "47. 59 vs SA, 2020", video: "https://www.dailymotion.com/embed/video/x9pnu9i" },
      { title: "48. 58 vs SA, 2020", video: "https://www.dailymotion.com/embed/video/x9pnu9k" },
      { title: "49. 68* vs WI, 2020", video: "https://www.dailymotion.com/embed/video/x9pubq0" },
      { title: "50. 100 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pjowm" },
      { title: "51. 89 vs AUS, 2021", video: "https://www.youtube.com/embed/i4XuC_klFsM" },
      { title: "52. 62 vs Aus, 2021", video: "https://www.dailymotion.com/embed/video/x9pwd0u" },
      { title: "53. 50 vs AUS, 2021", video: "https://www.dailymotion.com/embed/video/x9pkv2c" },
      { title: "54. 100 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pjowm" },
      { title: "55. 73 vs PAK, 2022", video: "https://www.dailymotion.com/embed/video/x9pkv24" },
      { title: "56. 57 vs NZ, 2023", video: "https://www.dailymotion.com/embed/video/x9pkv26" },
      { title: "57. 100 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pjowm" },
      { title: "58. 56 vs IRE, 2023", video: "https://www.dailymotion.com/embed/video/x9pkv1y" },
      { title: "59. 84 vs AUS, 2023", video: "https://www.dailymotion.com/embed/video/x9pkv1w" },
      { title: "60. 100 vs SA, 2016", video: "https://www.dailymotion.com/embed/video/x9pjowm" },
      { title: "61. 84 vs IND, 2024", video: "https://www.dailymotion.com/embed/video/x9pnuxs" },
      { title: "62. 68 vs WI, 2024", video: "https://www.youtube.com/embed/nGwfA0_JRIs" },
      { title: "63. 87 vs WI, 2024", video: "https://www.dailymotion.com/embed/video/x9pkv20" },
      { title: "64. 62* v SL, 2024", video: "https://www.dailymotion.com/embed/video/x9pqzcg" },
      { title: "65. 54 vs NZ, 2024", video: "https://www.dailymotion.com/embed/video/x9pwa6m" },
      { title: "66. 53* vs IND, 2025", video: "https://www.dailymotion.com/embed/video/x9pku1m" }
    ],
        centuries: [
          { title: "1. 104 vs NZ, 2013", video: "https://drive.google.com/file/d/1eqqYjtFZ5Aj8Y2f6irm2EvckLHJ5fSi3/preview" },
          { title: "2. 180 vs AUS, 2013", video: "https://drive.google.com/file/d/13RRP5LPIjo54ysPIqYD1ox_sdgfsv144/preview" },
          { title: "3. 200 vs SL, 2014", video: "https://drive.google.com/file/d/1Yj0mY1iG5dsJrM76saK6bdV60S1Tizyi/preview" },
          { title: "4. 154 vs IND, 2014", video: "https://drive.google.com/file/d/1FwPXgIYgPo8fwLhyCDfHwtOt3fPdEr10/preview" },
          { title: "5. 149* vs IND, 2014", video: "https://drive.google.com/file/d/1zyEWyVkIZcVrBmieBmgxz3GJ10P0Nesk/preview" },
          { title: "6. 182* vs WI, 2015", video: "https://drive.google.com/file/d/1h3ooQk3u5HTgf1nqQN17a_ZAVn3vRldo/preview" },
          { title: "7. 134 vs AUS, 2015", video: "https://drive.google.com/file/d/1dtjEOwmHCRqY5BCCWcF5KQrKgTDTkGMf/preview" },
          { title: "8. 130 vs AUS, 2015", video: "https://www.youtube.com/embed/q9DM4t4u5AQ" },
          { title: "9. 110 vs SA, 2016", video: "https://drive.google.com/file/d/1cY4Wv0j0lv-o1DM9qjABJ9jMKK14NTZr/preview" },
          { title: "10. 254 vs PAK, 2016", video: "https://drive.google.com/file/d/1XV0Rsv1muKZx1PBN8ur3ndVK_0Gw-kDD/preview" },
          { title: "11. 124 vs IND, 2016", video: "https://drive.google.com/file/d/1Pp7Nnx8Z1ArBKLRaxmpvXL2MBDRsDlK-/preview" },
          { title: "12. 190 vs SA, 2017", video: "https://drive.google.com/file/d/1-z0yVsz501Urj-3PdPXP_vH0WStNoYUW/preview" },
          { title: "13. 136 vs WI, 2017", video: "https://drive.google.com/file/d/1wUfizkxd0pqBoJttVKD9-hSz_aHEuNfr/preview" },
          { title: "14. 125 vs IND, 2018", video: "https://drive.google.com/file/d/1yWEwebqShq-97pOmkO8O4OywLAcoXmMk/preview" },
          { title: "15. 124 vs SL, 2018", video: "https://drive.google.com/file/d/1WNsUCLXoLJMo4cqoVxHSbyZ2nCU57QiM/preview" },
          { title: "16. 122 vs WI, 2019", video: "https://drive.google.com/file/d/1SSg4aNK4e_b389fjVM139fsRYqIsC4ok/preview" },
          { title: "17. 226 vs NZ, 2019", video: "https://www.youtube.com/embed/LhdPk2tMVtE" },
          { title: "18. 228 vs SL, 2021", video: "https://drive.google.com/file/d/1HHZOmjsZ7xgC4A4OaEGJhClOa1GHjiRc/preview" },
          { title: "19. 186 vs SL, 2021", video: "https://drive.google.com/file/d/1kBiyY9so9ARRVUTTqZk6-1vshefo4-lM/preview" },
          { title: "20. 218 vs IND, 2021", video: "https://www.youtube.com/embed/ZLow0xSPhgA" },
          { title: "21. 109 vs IND, 2021", video: "https://www.youtube.com/embed/5TOJpz_EYAw" },
          { title: "22. 180* vs IND, 2021", video: "https://drive.google.com/file/d/1jhb0vdXH8TZP_ds3ntIyZi8-ZVxUqZOt/preview" },
          { title: "23. 121 vs IND, 2021", video: "https://drive.google.com/file/d/1xbb8TlKgDnrS2vgMmV6eEo0T-LtLRUHv/preview" },
          { title: "24. 109 vs WI, 2022", video: "https://drive.google.com/file/d/1etmVLBHBwqnYOIxsmK6y2gYUCzgiDQ-N/preview" },
          { title: "25. 153 vs WI, 2022", video: "https://drive.google.com/file/d/1tsxvPCfoRRrGFSWhhCOd5bLXzt3XijFX/preview" },
          { title: "26. 115 vs NZ, 2022", video: "https://drive.google.com/file/d/1i04vETVTSpqC3tqhFEPV1Z6nwQfaLflM/preview" },
          { title: "27. 176 vs NZ, 2022", video: "https://drive.google.com/file/d/1T--FaubSDDuixMghEDGN0-nnElcpue8e/preview" },
          { title: "28. 142* vs IND, 2022", video: "https://drive.google.com/file/d/1WJyCBMqbEJBYlBdXXmBFJybIditzCDpu/preview" },
          { title: "29. 153* vs NZ, 2023", video: "https://drive.google.com/file/d/1jgoEGHf9bmX9yOBZjwLTHe1YOrvxHmzH/preview" },
          { title: "30. 118* vs NZ, 2023", video: "https://drive.google.com/file/d/13pGTwy9fil9SBN6KF3TQBNJWXxN7XVqw/preview" },
          { title: "31. 122* vs IND, 2024", video: "https://drive.google.com/file/d/1Lc6xFf3V9GDeg4XUkYp18WAwqjzWBRVE/preview" },
          { title: "32. 122 vs WI, 2024", video: "https://www.youtube.com/embed/J-xEs_t0Ad0" },
          { title: "33. 143 vs SL, 2024", video: "https://www.youtube.com/embed/By-PdbnBtD4" },
          { title: "34. 103 vs SL, 2024", video: "https://drive.google.com/file/d/1wZSu2XCE-lqsdHHrDh4_KjNURlAYfTCb/preview" },
          { title: "35. 262 vs PAK, 2024", video: "https://drive.google.com/file/d/1hW6Lx3B7ozgHGjV3ttFra5RoeCgvha5T/preview" },
          { title: "36. 106 vs NZ, 2024", video: "https://www.youtube.com/embed/vnklt6QyyxQ" },
          { title: "37. 104 vs IND, 2025", video: "https://drive.google.com/file/d/1AqMDgLo0JXiCoEJHeXwEs6OLgSd_1fK7/preview" },
          { title: "38. 150 vs IND, 2025", video: "https://drive.google.com/file/d/1HyPNe0M1TbE4FKTlA8Oqr3QQcMAFX68X/preview" },
          { title: "39. 105 vs IND, 2025", video: "https://drive.google.com/file/d/1F9zXNU1EyxoKdgC7rEIpLt_nWKTc_YPP/preview" }
      ]
      },
      kohli: {
        name: "Virat Kohli",
        centuries: [
          { title: "122* vs Pak, 2022", video: "https://drive.google.com/file/d/FILE_ID/preview" },
          { title: "149 vs Eng, 2018", video: "https://www.dailymotion.com/embed/video/VIDEO_ID" }
        ]
      },
      smith: {
        name: "Steve Smith",
        centuries: [
          { title: "1. 138* vs Eng, 2013", video: "https://www.dailymotion.com/embed/video/x8qpc6r" },
          { title: "2. 111 v Eng, 2013", video: "https://www.dailymotion.com/embed/video/x8rkmfl" },
          { title: "3. 115 V Eng, 2013", video: "https://www.dailymotion.com/embed/video/x8rkmhl" },
          { title: "4. 100 v SA, 2014", video: "https://www.dailymotion.com/embed/video/x8rf8hu" },
          { title: "5. 162* v IND, 2014", video: "https://www.dailymotion.com/embed/video/x8rkmz0" },
          { title: "6. 133 v IND, 2014", video: "https://www.dailymotion.com/embed/video/x8rknps" },
          { title: "7. 192 v IND, 2014", video: "https://www.dailymotion.com/embed/video/x8rknv5" },
          { title: "8. 117 v IND, 2015", video: "https://www.dailymotion.com/embed/video/x8rlbtf" },
          { title: "9. 199 v WI, 2015", video: "https://www.dailymotion.com/embed/video/x8rf8hy" },
          { title: "10. 215 v Eng, 2015", video: "https://www.dailymotion.com/embed/video/x8rmasm" },
          { title: "11. 143 v Eng, 2015", video: "https://www.dailymotion.com/embed/video/x8rmaw8" },
          { title: "12. 138 v NZ, 2015", video: "https://www.dailymotion.com/embed/video/x8rknp7" },
          { title: "13. 134 v WI, 2016", video: "https://www.dailymotion.com/embed/video/x8rlbsw" },
          { title: "14. 138 v NZ, 2016", video: "https://www.dailymotion.com/embed/video/x8pxyvj" },
          { title: "15. 119 v SL, 2016", video: "https://www.dailymotion.com/embed/video/x8rmaqx" },
          { title: "16. 130 v PAK, 2016", video: "https://www.dailymotion.com/embed/video/x8rlbts" },
          { title: "17. 165* v PAK, 2016", video: "https://www.dailymotion.com/embed/video/x8rlbth" },
          { title: "18. 109 v IND, 2017", video: "https://www.dailymotion.com/embed/video/x8rmapr" },
          { title: "19. 178* v IND, 2017", video: "https://www.dailymotion.com/embed/video/x8rhz7d" },
          { title: "20. 111 v IND, 2017", video: "https://www.dailymotion.com/embed/video/x8rmc13" },
          { title: "21. 141* v Eng, 2017", video: "https://www.dailymotion.com/embed/video/x8rf8hx" },
          { title: "22. 239 v Eng, 2017", video: "https://www.dailymotion.com/embed/video/x8rmax2" },
          { title: "23. 102* v Eng, 2017", video: "https://www.dailymotion.com/embed/video/x8rlbt5" },
          { title: "24. 144 v Eng, 2019", video: "https://www.dailymotion.com/embed/video/x8rf8hv" },
          { title: "25. 142 v Eng, 2019", video: "https://www.dailymotion.com/embed/video/x8rf8hz" },
          { title: "26. 211 v Eng, 2019", video: "https://www.dailymotion.com/embed/video/x8rhz3g" },
          { title: "27. 131 v IND, 2021", video: "https://www.dailymotion.com/embed/video/x8rknxq" },
          { title: "28. 145* v SL, 2022", video: "https://www.dailymotion.com/embed/video/x8rmar9" },
          { title: "29. 200* v WI, 2022", video: "https://www.dailymotion.com/embed/video/x8rldwk" },
          { title: "30. 104 v SA, 2023", video: "https://www.dailymotion.com/embed/video/x8rjn87" },
          { title: "31. 121 v IND, 2023", video: "https://www.dailymotion.com/embed/video/x8rmayk" },
          { title: "32. 110 v Eng, 2023", video: "https://www.dailymotion.com/embed/video/x8p5x1r" },
          { title: "33. 101 v IND, 2024", video: "https://www.dailymotion.com/embed/video/x9cchl8" },
          { title: "34. 140 v IND, 2024", video: "https://www.dailymotion.com/embed/video/x9cchji" },
          { title: "35. 141 v SL, 2025", video: "https://www.dailymotion.com/embed/video/x8" },
          { title: "36. 131 v SL, 2025", video: "https://www.dailymotion.com/embed/video/x8" }
        ]
      },
      pujara: {
        name: "Cheteshwar Pujara",
        centuries: [
          { title: "1. 138* vs Eng, 2013", video: "https://www.dailymotion.com/embed/video/x8qpc8r" },
          { title: "2. 111 v Eng, 2013", video: "https://www.dailymotion.com/embed/video/x8rkmkl" }
        ]
      },
      kane: {
        name: "Kane Williamson",
        centuries: [
          { title: "1. 131 vs IND, 2010", video: "https://drive.google.com/file/d/19VpmsZrirwFj8oL3R4h-M0YA6IyQwKTU/preview" },
          { title: "2. 102* v SA, 2012", video: "https://drive.google.com/file/d/1UDYNyHHmApd_bsKyj89MzVmlLZsSPopm/preview" },
          { title: "3. 135 v SL, 2012", video: "https://drive.google.com/file/d/1tAAoQ8SF_ip2_fj0mIqdSa7PFAW900mb/preview" },
          { title: "4. 114 v BAN, 2013", video: "https://drive.google.com/file/d/1yOhQcQhhXyEY_GJTp8Ze0BaFDmHMmWAK/preview" },
          { title: "5. 113 v IND, 2014", video: "https://drive.google.com/file/d/1rFCnmUZ0trBJfYUGF97AfCgqJQ6TyuW-/preview" },
          { title: "6. 113 v WI, 2014", video: "https://drive.google.com/file/d/1Wj9neh8UXlxz_QlAsrxD6xT76T8LGxsk/preview" },
          { title: "7. 161* v WI, 2014", video: "https://drive.google.com/file/d/1TGM5QLRFnSGQkvqWSxht72Fim9UpuNvm/preview" },
          { title: "8. 192 v PAK, 2014", video: "https://drive.google.com/file/d/1OGqLoVXyPZNax51UgkPw2YUAt4UN6xD8/preview" },
          { title: "9. 242* v SL, 2015", video: "https://drive.google.com/file/d/1FuffvwYpREeiRUFklCKY0BLs-XIrJDAA/preview" },
          { title: "10. 132 v ENG, 2015", video: "https://drive.google.com/file/d/14YNalwMuyMXBAHwY-qSvCVIabVNyH8Zv/preview" },
          { title: "11. 140 v AUS, 2015", video: "https://drive.google.com/file/d/1PSzV_-veporsGU-IEWa6nSSSlbHW5iLd/preview" },
          { title: "12. 166 v AUS, 2015", video: "https://drive.google.com/file/d/1Zg_e4QH4Bc827WtnvAthRJt09bQYFq_o/preview" },
          { title: "13. 108* v SL, 2015", video: "https://drive.google.com/file/d/1fXhUXkvfcprlC-iLT8SGc45LYzVHA2LV/preview" },
          { title: "14. 113 v ZIM, 2016", video: "https://drive.google.com/file/d/1G628RoSzxQd81svxqQ-wvbNDLeYX4JSa/preview" },
          { title: "15. 104* v BAN, 2017", video: "https://drive.google.com/file/d/1_oZPn7gaIeJ4281ZgNkRfDdLs3cSCKuf/preview" },
          { title: "16. 130 v SA, 2017", video: "https://drive.google.com/file/d/1L4ZAkpf3m5_rwMqrw7iGGVVc_haKUg24/preview" },
          { title: "17. 176 v SA, 2017", video: "https://drive.google.com/file/d/1pSH9N_z9e2RnCBslodWdu_Laqp_weIMv/preview" },
          { title: "18. 102 v ENG, 2018", video: "https://drive.google.com/file/d/1Q0ZqA14YcsgtoWhdvdx3XzBdnrTlN9C0/preview" },
          { title: "19. 139 v PAK, 2018", video: "https://drive.google.com/file/d/1Ks2ocImRZDR7im2uRBC8E_zRyCOZi6hS/preview" },
          { title: "20. 200* v BAN, 2019", video: "https://drive.google.com/file/d/1tM6Ztkv8I164ag-g5Fs-Kd9-7rWu8TCl/preview" },
          { title: "21. 104* v ENG, 2019", video: "https://drive.google.com/file/d/1zgO7YltB1we3TPoY0-708-ZUCGe-rHPI/preview" },
          { title: "22. 251 v WI, 2020", video: "https://drive.google.com/file/d/17uHC061F-VIMK14HLbB42ikdGT0y-SdM/preview" },
          { title: "23. 129 v PAK, 2020", video: "https://drive.google.com/file/d/1BHlgjl1ZIaEMpWX_Qii4RV4N3zqgczgL/preview" },
          { title: "24. 238 v PAK, 2021", video: "https://drive.google.com/file/d/1boT6RgUF-rA6PJZNp5mb01e3xiFD80nU/preview" },
          { title: "25. 200* v PAK, 2022", video: "https://drive.google.com/file/d/1MqOlaccPChThYj3p3CqnMvuYm3X5EJD0/preview" },
          { title: "26. 132 v ENG, 2023", video: "https://drive.google.com/file/d/1sSD5fUjo_R5K2QY78tcuQXFxkbOG7klZ/preview" },
          { title: "27. 121* v SL, 2023", video: "https://drive.google.com/file/d/1uUPVaiITjXH3lF9TXl2nJIqFZvflsC63/preview" },
          { title: "28. 215 v SL, 2023", video: "https://drive.google.com/file/d/1Q9FtTQRU6s0NDeaEiuo8IdWcyDuYmRir/preview" },
          { title: "29. 104 v BAN, 2023", video: "https://drive.google.com/file/d/1i1HgHS-z5dJEUczoK2dvNO6gOXSYNnG4/preview" },
          { title: "30. 118 v SA, 2024", video: "https://drive.google.com/file/d/1YNn5n3xoBd7LDF2Gr8uXHGSFSNeKWYEJ/preview" },
          { title: "31. 109 v SA, 2024", video: "https://drive.google.com/file/d/1CA5NEOp6Xk4S6gG8EFIPRTFR6jBZxWw0/preview" },
          { title: "32. 133* v SA, 2024", video: "https://drive.google.com/file/d/1r3DkpBBDO8Jxj5qJgUBC3fqY0-LH1Gka/preview" },
          { title: "33. 156 v ENG, 2024", video: "https://drive.google.com/file/d/1XNPd5NAmlPNJvSYPXDPoPIafcYR9dQPD/preview" }
        ]
      }
    };

function hideAllPlayers() {
  const allPlayers = document.getElementById("all-players");
  if (allPlayers) allPlayers.style.display = "none";
}
function showAllPlayers() {
  const allPlayers = document.getElementById("all-players");
  if (allPlayers) allPlayers.style.display = "flex";
}

let currentPlayerKey = null;

function openPlayer(playerKey) {
  currentPlayerKey = playerKey;
  document.getElementById("players").classList.add("hidden");

  if (playerKey === "root") {
    document.getElementById("main").classList.add("hidden");
    document.getElementById("rootOptions").classList.remove("hidden");
  } else {
    const player = players[playerKey];
    document.getElementById("main").classList.add("hidden");
    document.getElementById("playerPage").classList.remove("hidden");
    document.getElementById("playerName").innerText = player.name;

    const list = document.getElementById("centuriesList");
    list.innerHTML = "";
    player.centuries.forEach((c, index) => {
      const thumb = getThumbnail(c.video);
      list.innerHTML += `
        <div class="century-card">
          <div class="century-info">
            <h3>${c.title}</h3>
            <div class="video-frame" id="video-${index}" data-url="${c.video}">
              <img src="${thumb}" alt="Video Thumbnail" style="width:100%;border-radius:12px;">
              <button onclick="toggleVideo('${c.video}', 'video-${index}')" class="play-btn">▶ Play Video</button>
            </div>
          </div>
        </div>`;
    });
  }
}

function openRootStat(type) {
  const player = players["root"];
  document.getElementById("rootOptions").classList.add("hidden");
  document.getElementById("playerPage").classList.remove("hidden");
  document.getElementById("playerName").innerText =
    "Joe Root – " + (type === "centuries" ? "Test 100s" : "Test 50s");

  const list = document.getElementById("centuriesList");
  list.innerHTML = "";
  player[type].forEach((c, index) => {
    const thumb = getThumbnail(c.video);
    list.innerHTML += `
      <div class="century-card">
        <div class="century-info">
          <h3>${c.title}</h3>
          <div class="video-frame" id="video-${index}" data-url="${c.video}">
            <img src="${thumb}" alt="Video Thumbnail" style="width:100%;border-radius:12px;">
            <button onclick="toggleVideo('${c.video}', 'video-${index}')" class="play-btn">▶ Play Video</button>
          </div>
        </div>
      </div>`;
  });
}

function toggleVideo(url, containerId) {
  document.querySelectorAll(".video-frame").forEach(frame => {
    const originalUrl = frame.getAttribute("data-url");
    if (frame.id !== containerId) {
      const thumb = getThumbnail(originalUrl);
      frame.innerHTML = `
        <img src="${thumb}" alt="Video Thumbnail" style="width:100%;border-radius:12px;">
        <button onclick="toggleVideo('${originalUrl}', '${frame.id}')" class="play-btn">▶ Play Video</button>`;
    }
  });

  const container = document.getElementById(containerId);
  if (container.querySelector("iframe")) {
    const thumb = getThumbnail(url);
    container.innerHTML = `
      <img src="${thumb}" alt="Video Thumbnail" style="width:100%;border-radius:12px;">
      <button onclick="toggleVideo('${url}', '${containerId}')" class="play-btn">▶ Play Video</button>`;
  } else {
    container.innerHTML = `<iframe src="${url}" allowfullscreen></iframe>`;
  }
}

function backToWelcome() {
  document.getElementById("welcome").classList.remove("hidden");
  document.getElementById("main").classList.add("hidden");
  document.querySelector(".yt-bottom-nav").style.display = "none";
}

document.getElementById("playerSearch").addEventListener("keyup", function() {
  const filter = this.value.toLowerCase();
  document.querySelectorAll(".player-card").forEach(card => {
    const name = card.innerText.toLowerCase();
    card.style.display = name.includes(filter) ? "flex" : "none";
  });
});

function showPage(pageId) {
  const pages = ["main","players","trending","about","playerPage","rootOptions"];
  pages.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.classList.add("hidden");
  });
  document.getElementById(pageId).classList.remove("hidden");

  const footer = document.getElementById("mainFooter");
  footer.style.display = (pageId === "welcome") ? "block" : "none";
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const allHighlights = [];
for (const key in players) {
  const player = players[key];
  if (player.fifties) {
    player.fifties.forEach(h => { allHighlights.push({ ...h, player: player.name }); });
  }
  if (player.centuries) {
    player.centuries.forEach(h => { allHighlights.push({ ...h, player: player.name }); });
  }
}

shuffle(allHighlights);

// Carousel cards
const cards = {
  left: document.querySelector(".highlight-card.left"),
  center: document.querySelector(".highlight-card.center"),
  right: document.querySelector(".highlight-card.right"),
};
const thumb = document.getElementById("highlight-thumb");
const title = document.getElementById("highlight-title");
const frame = document.getElementById("highlight-frame");
const playBtn = document.getElementById("play-button");

let index = Math.floor(Math.random() * allHighlights.length);
let userSelected = false;

function updateCards() {
  const prev = allHighlights[(index - 1 + allHighlights.length) % allHighlights.length];
  const current = allHighlights[index % allHighlights.length];
  const next = allHighlights[(index + 1) % allHighlights.length];

  // left preview
  cards.left.style.backgroundImage = `url(${getThumbnail(prev.video)})`;
  cards.left.style.backgroundSize = "cover";

  // center preview
  thumb.src = getThumbnail(current.video);
  title.textContent = `${current.player} - ${current.title}`;
  frame.src = "";
  frame.style.display = "none";
  playBtn.style.display = "block";
  thumb.style.display = "block";

  // right preview
  cards.right.style.backgroundImage = `url(${getThumbnail(next.video)})`;
  cards.right.style.backgroundSize = "cover";
}

function rotateCarousel() {
  if (userSelected) return; // stop rotation while video plays
  index = (index + 1) % allHighlights.length;
  updateCards();
}

// Play video
playBtn.addEventListener("click", () => {
  userSelected = true;
  thumb.style.display = "none";
  playBtn.style.display = "none";
  frame.style.display = "block";
  const highlight = allHighlights[index];
  frame.src = highlight.video;
});

// Init
updateCards();
setInterval(rotateCarousel, 8000); // rotate every 8s