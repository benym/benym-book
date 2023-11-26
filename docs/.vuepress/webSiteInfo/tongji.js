/*
 * @name:
 * @author: wuxd
 * @Date: 2021-04-22 09:25:01
 * @LastEditTime: 2021-04-23 16:55:14
 */
import $ from "jquery"; //在vuepress所属package.json中安装jquery
var nowPageUrl = "";

//入口方法
export function getCount(path) {
    nowPageUrl = path;
    return new Promise((resolve, reject) => {
        getBaidu().then((res) => {
            resolve(res);
        });
    });
}

//请求百度统计公开接口获取统计数据
async function getBaidu() {
    var num = 0;
    await $.ajax({
        type: "get",
        dataType: "jsonp",
        url: "https://openapi.baidu.com/rest/2.0/tongji/report/getData",
        data: {
            access_token: "xxx", //
            site_id: "xxx",
            method: "overview/getCommonTrackRpt",
            start_date: "20210401",
            end_date: "20310401",
            metrics: "pv_count",
        },
        success: function(res) {
            num = visiteNum(res.result);
        },
        error: function(err) {
            console.log("error======", err);
        },
    });
    return num;
}

//计算对应页面的浏览量
function visiteNum(data) {
    var visite = 0;
    //计算总浏览量

    if (data && data.visitPage) {
        if (nowPageUrl === "home") {
            // visite = data.sourceSite.items[0][1];-直观统计包括了本地测试域名和正式域名浏览量之和
            //受访页面列表
            const items = data.visitPage.items || [];
            //查询对应域名下精确统计总数
            const arrs = items.filter(
                (v) => v[0].indexOf(window.location.origin) > -1
            );
            visite = arrs.reduce((pre, cur) => {
                pre += Number(cur[1]);
                return pre;
            }, 0);
        } else {
            //计算单页面浏览量
            // encodeURI-转码
            // decodeURI-解码
            //受访页面列表
            const items = data.visitPage.items || [];
            //当前页面完整地址
            const pathurl = window.location.origin + nowPageUrl;
            for (let i = 0; i < items.length; i++) {
                if (items[i][0] === pathurl) {
                    visite = items[i][1];
                }
            }
        }
    }
    return visite;
}
