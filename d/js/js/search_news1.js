function search_check(obj){if(obj.keyboard.value.length==0){alert('请输入搜索关键字');return false;}return true;}document.write("<table border=0 cellpadding=3 cellspacing=1><form name=search_js1 method=post action='/e/search/index.php' onsubmit='return search_check(document.search_js1);'><tr><td><div align=center>搜索: <select name=show><option value=title>标题</option><option value=smalltext>简介</option><option value=newstext>内容</option><option value=writer>作者</option><option value=title,smalltext,newstext,writer>搜索全部</option></select><select name=classid><option value=0>所有栏目</option><option value='1'>|-最新电影</option><option value='5' style='background:#99C4E3'>&nbsp;&nbsp;|-动作片</option><option value='6' style='background:#99C4E3'>&nbsp;&nbsp;|-喜剧片</option><option value='7' style='background:#99C4E3'>&nbsp;&nbsp;|-科幻片</option><option value='2' style='background:#99C4E3'>|-热播电视剧</option><option value='3' style='background:#99C4E3'>|-小视频</option><option value='4' style='background:#99C4E3'>|-微拍</option><option value='8'>|-网站杂项（勿删）</option><option value='9'>&nbsp;&nbsp;|-标签云</option><option value='10'>&nbsp;&nbsp;|-免责声明</option><option value='11'>&nbsp;&nbsp;|-关于我们</option><option value='12'>&nbsp;&nbsp;|-投稿规则</option><option value='13'>&nbsp;&nbsp;|-广告合作</option><option value='14'>&nbsp;&nbsp;|-留言反馈</option><option value='15'>&nbsp;&nbsp;|-联系我们</option></select><input name=keyboard type=text size=13><input type=submit name=Submit value=搜索></div></td></tr></form></table>");