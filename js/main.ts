function SetstationID( stName:string ):string {
    let stationID:string;
    if     (stName == "基隆"){stationID = "EPA001";}//轉換站位名為編號，以利與GTx資料整合
    else if(stName == "汐止"){stationID = "EPA002";}
    else if(stName == "萬里"){stationID = "EPA003";}
    else if(stName == "新店"){stationID = "EPA004";}
    else if(stName == "土城"){stationID = "EPA005";}
    else if(stName == "板橋"){stationID = "EPA006";}
    else if(stName == "新莊"){stationID = "EPA007";}
    else if(stName == "菜寮"){stationID = "EPA008";}
    else if(stName == "林口"){stationID = "EPA009";}
    else if(stName == "淡水"){stationID = "EPA010";}
    else if(stName == "士林"){stationID = "EPA011";}
    else if(stName == "中山"){stationID = "EPA012";}
    else if(stName == "萬華"){stationID = "EPA013";}
    else if(stName == "古亭"){stationID = "EPA014";}
    else if(stName == "松山"){stationID = "EPA015";}

    else if(stName == "桃園"){stationID = "EPA017";}
    else if(stName == "大園"){stationID = "EPA018";}
    else if(stName == "觀音"){stationID = "EPA019";}
    else if(stName == "平鎮"){stationID = "EPA020";}
    else if(stName == "龍潭"){stationID = "EPA021";}
    else if(stName == "湖口"){stationID = "EPA022";}
    else if(stName == "竹東"){stationID = "EPA023";}
    else if(stName == "新竹"){stationID = "EPA024";}
    else if(stName == "頭份"){stationID = "EPA025";}
    else if(stName == "苗栗"){stationID = "EPA026";}
    else if(stName == "三義"){stationID = "EPA027";}
    else if(stName == "豐原"){stationID = "EPA028";}
    else if(stName == "沙鹿"){stationID = "EPA029";}
    else if(stName == "大里"){stationID = "EPA030";}
    else if(stName == "忠明"){stationID = "EPA031";}
    else if(stName == "西屯"){stationID = "EPA032";}
    else if(stName == "彰化"){stationID = "EPA033";}
    else if(stName == "線西"){stationID = "EPA034";}
    else if(stName == "二林"){stationID = "EPA035";}
    else if(stName == "南投"){stationID = "EPA036";}
    else if(stName == "斗六"){stationID = "EPA037";}
    else if(stName == "崙背"){stationID = "EPA038";}
    else if(stName == "新港"){stationID = "EPA039";}
    else if(stName == "朴子"){stationID = "EPA040";}
    else if(stName == "臺西"){stationID = "EPA041";}
    else if(stName == "嘉義"){stationID = "EPA042";}
    else if(stName == "新營"){stationID = "EPA043";}
    else if(stName == "善化"){stationID = "EPA044";}
    else if(stName == "安南"){stationID = "EPA045";}
    else if(stName == "臺南"){stationID = "EPA046";}
    else if(stName == "美濃"){stationID = "EPA047";}
    else if(stName == "橋頭"){stationID = "EPA048";}
    else if(stName == "仁武"){stationID = "EPA049";}
    else if(stName == "鳳山"){stationID = "EPA050";}
    else if(stName == "大寮"){stationID = "EPA051";}
    else if(stName == "林園"){stationID = "EPA052";}
    else if(stName == "楠梓"){stationID = "EPA053";}
    else if(stName == "左營"){stationID = "EPA054";}

    else if(stName == "前金"){stationID = "EPA056";}
    else if(stName == "前鎮"){stationID = "EPA057";}
    else if(stName == "小港"){stationID = "EPA058";}
    else if(stName == "屏東"){stationID = "EPA059";}
    else if(stName == "潮州"){stationID = "EPA060";}
    else if(stName == "恆春"){stationID = "EPA061";}
    else if(stName == "臺東"){stationID = "EPA062";}
    else if(stName == "花蓮"){stationID = "EPA063";}
    else if(stName == "陽明"){stationID = "EPA064";}
    else if(stName == "宜蘭"){stationID = "EPA065";}
    else if(stName == "冬山"){stationID = "EPA066";}
    else if(stName == "三重"){stationID = "EPA067";}
    else if(stName == "中壢"){stationID = "EPA068";}
    else if(stName == "竹山"){stationID = "EPA069";}
    else if(stName == "永和"){stationID = "EPA070";}
    else if(stName == "復興"){stationID = "EPA071";}
    else if(stName == "埔里"){stationID = "EPA072";}
    else if(stName == "金門"){stationID = "EPA101";}
    else if(stName == "馬祖"){stationID = "EPA102";}
    else if(stName == "阿里山"){stationID = "EPA103";}
    else if(stName == "馬公"){stationID = "EPA104";}
    else if(stName == "崇倫"){stationID = "EPA105";}
    else if(stName == "麥寮"){stationID = "EPA101";}
    else if(stName == ""   ){stationID = "";}
    else                    {stationID = "Error";}
    return stationID;
}
const rowNum:number = 27;
let rowName:string[] = [
	"Year",
	"Month",
	"Day",
	"Hour",
	"SiteName",
	"StationID",
	"SO2",
	"CO",
	"O3",
	"PM10",
	"PM2.5",
	"NOx",
	"NO",
	"NO2",
	"THC",
	"NMHC",
	"CH4",
	"UVB",
	"AMB_TEMP",
	"RAINFALL",
	"RH",
	"WIND_SPEED",
	"WIND_DIREC",
	"WS_HR",
	"WD_HR",
	"PH_RAIN",
	"RAIN_COND"
];
