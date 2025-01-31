import Speeder from "@/components/reader/speeder";
const SAMPLE_TEXT = `
Rời cầu cây số 4 một quãng, xe trèo lên núi. Mây hắt từng chiếc quạt trắng lên từ các thung lũng. Chỉ thấy thấp thoáng trong màu xanh bao la, ở phía trước, một vệt hình ba góc màu vàng, chính là đoạn đường mình vừa đi qua. Đi một lúc lâu, ngửng lên, vẫn thấy cái vệt ba góc đó. Đến bây giờ, người lái xe già mới cất tiếng nói: - Con suối có thác trắng xoá ta vừa qua là trạm rừng. Một lúc nữa thì tới Sapa. Bác không ghé thăm Sapa ư? Họa sĩ nào cũng đến Sapa! Ở đấy tha hồ mà vẽ. Tôi đi đường này ba mươi hai năm. Trước Cách mạng tháng Tám, tôi trở lên trở về mãi nhiều họa sĩ như bác. Họa sĩ Tô Ngọc Vân này, họa sĩ Hoàng Kiệt này…

Thật là đột ngột! Nhà hội họa có tuổi mỉm cười thay lời đáp. Lúc nãy, ở bến Lao Cai, lúc xe sắp nổ máy, thấy hàng ghế thứ ba chật vì đôi vợ chồng Mèo trẻ mua vé không cùng chuyến nhưng nhất định không rời nhau, bác lái xe mời ông lên ghế đầu, ngồi giữa bác và một cô gái. Ông vừa yên chỗ, bác lái xe ngắm nghía thế nào hỏi ngay: “Bác là họa sĩ à?” À, ra thế - ông nghĩ thầm - Bác từng quen nhiều họa sĩ. Cũng là một tay lái có máu nghệ thuật đây.

- Nực cười, lúc còn trẻ, tôi cũng qua đường này nhiều lần chứ. Giá vẽ, hộp màu, cuộn giấy, lích kích lắm chứ. Thế nhưng chẳng ai nhận ra tôi. Bây giờ già rồi, đi đâu trong túi cũng mỗi cuốn sổ con này thôi, vậy mà ai cũng nói đúng mình làm nghề gì, không lẫn đi đâu được. Cô đây, hôm qua cô chẳng hỏi tôi thế là gì?

Cô gái nhếch mép cười, có vẻ rất bằng lòng về việc ông được chuyển lên ngồi cạnh cô. Sau một đêm và một ngày đi tàu từ Hà Nội, cùng ngồi trong một ngăn toa cứ chật dần lên, đến nơi lại không có cách nào khác đành gộp hành lý luồn vào một chiếc đòn gánh cùng khiêng đến khách sạn cách thị xã bốn cây, sau một đoạn đường như vậy, người ta coi nhau như là bà con. Nhà họa sĩ có cái cảm giác lẫn lộn thường có ở tuổi già, nhanh chóng coi cô gái là con.

- Tuần lễ này, ở nhà, anh em định làm tiệc tiễn tôi về hưu. Tôi xin anh em hoãn bữa tiệc đến cuối tuần sau. Đợi tôi đi chuyến “thực tế” này về đã. Đối với một nghệ sĩ, trong cuộc đời có hai hồi thích nhất, đó là hồi mình còn trẻ và hồi này của tôi. Mình có thể năng nổ đi, vẽ, như thời thanh niên. Mình có thêm sự chín chắn hồi ấy mình chưa có. Không bi quan, không ảo tưởng, tôi cho tôi cũng còn được mười năm sống nữa. Phải vẽ được cái gì suốt đời mình thích, cô nhỉ?

Ông dễ dàng cởi mở với cô gái những lời tự tin mà, đã già, ông vẫn giữ một cách khiêm tốn vô lý, không bao giờ dám thổ lộ với bạn bè. Còn cô gái là kỹ sư vừa đỗ, đi nhận việc ở Ty Nông nghiệp Lai Châu. Lần đầu ra khỏi Hà Nội, qua cuộc đời học trò chật hẹp, bước vào cuộc sống bát ngát mới tinh, cái gì cũng làm cho cô háo hức. Cô cứ nhìn ra ngoài cửa xe, mắt lặng lẽ mà say mê. Cô là thanh niên trẻ ra trường có thể đi bất kì đâu, làm bất kì gì, nhận bất kỳ lương hướng, tiếp đón thế nào, cô thấy lòng cô cũng nhẹ nhàng. Sự thật thì cô cũng có lần yêu, nhưng rồi xóa ngay vì biết mình lầm.

Hai ngày sống gần với nhau, với sự nhạy cảm riêng của người nghệ sĩ, nhà hội họa già biết điều đó. Ông nói như nói một điều hiển nhiên và không quan trọng:

- Đối với một người khao khát trời rộng, sự dứt bỏ một tình yêu nhiều khi lại nhẹ lòng. Người con gái xúc động vì đột nhiên nghe một người đã già diễn tả bằng lời cảm nghĩ vốn mơ hồ và lả tả của mình. Từ phút đó trở đi, hai người gần nhau thêm một mức nữa.

- Hay đấy. Tôi cũng đi Lai Châu. Tôi sẽ đưa cô đến ti, giao cô tận tay ông trưởng ti, nhờ ông ta hết sức giúp cô, xem qua chỗ ăn, chỗ nằm của cô như một ông bố thật sự, rồi tôi quay về. Cô không lo đâu.

Như vậy đấy, bắt đầu sự thân thiết giữa cô gái và ông già vui tính.

- Chúng ta vừa qua Sa Pa, bác không nhận ra ư? - Người lái xe bỗng nhiên lại hỏi.

- Có. Tôi có nhận ra. Sa Pa bắt đầu với những rặng đào. Và với những đàn bò lang cổ có đeo chuông ở các đồng cỏ trong lũng hai bên đường. Chỗ ấy là Tả Phình phải không bác? - Nhà họa sĩ hỏi.

- Vâng. Bác không thích dừng lại Sa Pa ạ?

- Thích chứ, thích lắm. Thế nào tôi cũng về ở hẳn đấy. Tôi đã định thế. Nhưng bây giờ chưa phải lúc.

- Bác sợ Sa Pa buồn chứ gì?

Nhà họa sĩ phá lên cười:

- Buồn thì ai mà chả sợ? Nó như con gián gặm nhấm người ta? Tốt hơn là tránh nó để làm việc đời.

Những nét hớn hở trên mặt người lái xe chợt duỗi ra rồi bẵng đi một lúc, bác không nói gì nữa. Còn nhà họa sĩ và cô gái cũng nín bật, vì cảnh trước mặt bỗng hiện lên đẹp một cách kì lạ. Nắng bây giờ bắt đầu len tới, đốt cháy rừng cây. Những cây thông chỉ cao quá đầu, rung tít trong nắng những ngón tay bằng bạc dưới cái nhìn bao che của những cây tử kính thỉnh thoảng nhô cái đầu màu hoa cà lên trên màu xanh của rừng. Mây bị nắng xua, cuộn tròn lại từng cục, lăn trên các vòm lá ướt sương, rơi xuống đường cái, luồn cả vào gầm xe. Giữa lúc đó, xe dừng sít lại. Hai ba người kêu lên một lúc:

- Cái gì thế?

Bác lái xe xướng to:

- Cho xe nghỉ một lúc lấy nước. Luôn tiện bà con lót dạ. Nửa tiếng, các ông, các bà nhé.

Trong lúc mọi người xôn xao vui vẻ phía sau lưng, bác lái xe quay sang nhà họa sĩ nói vội vã:

- Tôi sắp giới thiệu với bác một trong những người cô độc nhất thế gian. Thế nào bác cũng thích vẻ hắn.

Không hiểu sao nói đến đây, bác lái xe lại liếc nhìn cô gái. Cô bất giác đỏ mặt lên!

- Một anh thanh niên hai mươi bảy tuổi! Đây là đỉnh Yên Sơn, cao hai nghìn sáu trăm mét. Anh ta làm công tác khí tượng kiêm vật lý địa cầu. Cách đây bốn năm, có hôm tôi cũng đang đi thế này chợt thấy một khúc thân cây chắn ngang đường, phải hãm lại. Một anh thanh niên ở đâu chạy đến, hè với tôi và khách đi xe đẩy khúc cây ra một bên cho xe đi. Hỏi ở đây mà ai đẩy cây ra giữa đường thế này, anh chỉ đỏ mặt. Thì ra anh ta mới lên nhận việc, sống một mình trên đỉnh núi, bốn bề chỉ cây cỏ và mây mù lạnh lẽo, chưa quen, thèm người quá, anh ta kiếm kế dừng xe lại để gặp chúng tôi, nhìn trông và nói chuyện một lát. Kìa, anh ta kia.

Những lời giới thiệu trước ấy làm nhà họa sĩ già xúc động mạnh khi nhìn thấy người con trai tầm vóc bé nhỏ, nét mặt rạng rỡ từ trên sườn núi trước mặt chạy lại chỗ xe đỗ. Ông không chú ý cô con gái cũng víu chặt vào vai ông, nửa vì tò mò, nửa vì để tự vệ chống lại một cái gì đó. Người con trai đưa cho bác lái xe một gói nhỏ:

- Cái gì thế này? - Bác lái xe hỏi.

- Củ tam thất cháu vừa đào thấy. Cháu gửi bác gái ngâm rượu uống. Hôm nọ bác chẳng bảo bác gái vừa ốm dậy là gì?

Bác lái xe cũng rút từ túi cửa xe ra một gói giấy:

- Còn đây là sách tôi mua hộ anh.

Người con trai mừng quýnh cằm cuốn sách còn đang cười cười nhìn khắp khách đi xe bây giờ đã xuống đất tất cả. Kẻ đang vươn vai, người ngồi bệt xuống ven đường giở thức ăn mang theo ra. Bác lái xe dắt anh ta lại chỗ nhà hội họa và cô gái:

- Đây, tôi giới thiệu với anh một họa sĩ lão thành nhé. Và cô đây là kỹ sư nông nghiệp. Anh đưa khách về nhà đi. Tuổi già cần nước chè, ở Lào Cai đi sớm quá. Anh hãy đưa ra cái món chè pha nước mưa thơm như nước hoa của Yên Sơn nhà anh.

Anh thanh niên đỏ mặt, rõ ràng luống cuống:

- Vâng, mời bác và cô lên chơi. Nhà cháu kia. Lên cái bậc cấp kia, trên ấy có cái nhà đấy. Nước sôi đã có sẵn, nhưng cháu về trước một tí. Bác và cô lên ngay nhé.

Nói xong, anh chạy vụt đi, cũng tất tả như khi đến.

- Bác và cô lên với anh ấy một tí. Thế nào bác cũng thích vẽ anh ta - Người lái xe lại nói.

Họa sĩ nghĩ thầm: “Khách tới bất ngờ, chắc cu cậu chưa kịp quét tước dọn dẹp, chưa kịp gấp chăn chẳng hạn.” Ông rất ngạc nhiên khi bước lên bậc thang bằng đất, thấy người thanh niên đang hái hoa. Còn cô kĩ sư chỉ “ô” lên một tiếng! Sau gần hai ngày, qua ngót bốn trăm cây số đường dài cách xa Hà Nội, đứng trông mây mù ngang tầm với chiếc cầu vồng kia, bỗng nhiên lại gặp hoa dơn, hoa thược dược, vàng, tím, đỏ, hồng phấn, tổ ong… ngay lúc dưới kia là mùa hè, đột ngột và mừng rỡ, quên mất e lệ, cô chạy đến bên người con trai đang cắt hoa. Anh con trai, rất tự nhiên như với một người bạn đã quen thân, trao bó hoa đã cắt cho người con gái, và cũng rất tự nhiên, cô đỡ lấy.

- Tôi cắt thêm mấy cành nữa. Rồi cô muốn lấy bao nhiêu nữa, tùy ý. Cô cứ cắt một bó rõ to vào. Có thể cắt hết, nếu cô thích. Tôi không biết kỷ niệm thế nào cho thật long trọng ngày hôm nay. Bác và cô là đoàn khách thứ hai đến thăm nhà tôi từ tết. Và cô là cô gái thứ nhất từ Hà Nội lên tới nhà tôi từ bốn năm nay.

Người con trai nói to những điều đáng lẽ người ta chỉ nghĩ. Cũng là những điều ta ít nghĩ. Việc ấy làm bác già và cô gái cảm động và cuốn hút ngay. Cô ôm bó hoa vào ngực, bạo dạn nhìn thẳng vào mặt anh. Anh thanh niên bắt gặp cái nhìn đó, phủi vội giọt mồ hôi trên sống mũi, mỉm cười, hạ giọng hỏi:

- Cũng đoàn viên, phỏng?

- Vâng - cô gái sẽ nói.

- Thôi, chấm dứt tiết mục hái hoa - Người con trai bất chợt quyết định - Bác lái xe chỉ cho ba mươi phút thôi. Hết năm phút rồi. Cháu nói qua công việc của cháu năm phút. Còn hai mươi phút, mời bác và cô vào nhà uống chè, cho cháu nghe chuyện. Cháu thèm nghe chuyện dưới xuôi lắm. Công việc của cháu cũng quanh quẩn ở mấy chiếc máy ngoài vườn này thôi. Những cái máy vườn trạm khí tượng nào cũng có. Dãy núi này có ảnh hưởng quyết định với gió mùa đông bắc đối với miền Bắc nước ta. Cháu ở đây có nhiệm vụ đo gió, đo mưa, đo nắng, tính mây, đo chấn động mặt đất, dự vào việc báo trước thời tiết hằng ngày, phục vụ sản xuất, phục vụ chiến đấu. Đây là máy móc của cháu. Cái thùng đo mưa này, ở đâu bác cũng trông thấy, mưa xong đổ nước ra cái cốc li phân mà đo. Cái này là máy nhật quang ký, ánh sáng mặt trời xuyên qua cái kính này, đốt các mảnh giấy này, cứ theo mức độ, hình dáng vết cháy vết cháy mà định nắng. Đây là máy vin, nhìn khoảng cách giữa các răng cưa mà đoán gió. Ban đêm không nhìn mây, cháu nhìn gió lay lá, hay nhìn trời, thấy sao nào khuất, sao nào sáng, có thể nói được mây, tính được gió. Cái máy nằm dưới sâu kia là máy đo chấn động vỏ quả đất. Cháu lấy những con số, mỗi ngày báo về “nhà” bằng máy bộ đàm: bốn giờ, mười một giờ, bảy giờ tối, lại một giờ sáng. Bản báo ấy trong ngành gọi là “ốp”. Công việc nói chung dễ, chỉ cần chính xác. Gian khổ nhất là lần ghi và báo về lúc một giờ sáng. Rét, bác ạ. Ở đây có cả mưa tuyết đấy. Nửa đêm đang nằm trong chăn, nghe chuông đồng hồ chỉ muốn đưa tay tắt đi. Chui ra khỏi chăn, ngọn đèn bão vặn to đến cỡ nào vẫn thấy là không đủ sáng. Xách đèn ra vườn, gió tuyết và lặng im ở bên ngoài như chỉ chực mình ra là ào ào xô tới. Cái lặng im lúc đó mới thật dễ sợ: nó như bị chặt ra từng khúc, mà gió thì giống những nhát chổi muốn quét đi tất cả, ném vứt lung tung… Những lúc im lặng lạnh cóng mà lại hừng hực như cháy. Xong việc, trở vào, không thể nào ngủ lại được.

Anh thanh niên đang nói, dừng lại. Và tại sao họa sĩ cảm giác mình bối rối? Vì nhác thấy người con gái nhỏ nhẻ, e lệ, đứng giữa các luống dơn, không cần hái hoa nữa, ôm nguyên bó hoa trong tay, lắng tai nghe? Vì họa sĩ đã bắt gặp một điều thật ra ông vẫn ao ước được biết, ôi, một nét thôi đủ khẳng định một tâm hồn, khơi gợi một ý sáng tác, một nét mới đủ là giá trị một chuyến đi dài.

- Anh nói nữa đi - Ông giục.

- Báo cáo hết! - Người con trai vụt trở lại giọng vui vẻ. - Năm phút nữa là mười. Còn hai mươi phút thôi. Bác và cô vào trong nhà. Chè đã ngấm rồi đấy.

Thì giờ ngắn ngủi còn lại thúc giục cả chính người họa sĩ già. Ông theo liền anh thanh niên vào trong nhà, đảo nhìn qua một lượt trước khi ngồi xuống ghế. Một căn nhà ba gian, sạch sẽ, với bàn ghế, sổ sách, biểu đồ, thống kê, máy bộ đàm. Cuộc đời riêng của anh thanh niên thu gọn lại một góc trái gian với chiếc giường con, một chiếc bàn học, một giá sách. Họa sĩ còn đang nheo mắt cố đọc tên các sách trên giá thì cô gái đã bước tới, dường như làm việc ấy hộ bố. Cô không trở lại bàn giữa và ngồi ngay xuống trước chiếc bàn học con, lật xem bìa một cuốn sách rồi để lại nguyên lật mở như cũ. Anh thanh niên rót nước chè mời bác già, ngoảnh lại tìm cô gái, thấy cô đang đọc, liền bưng cái chén con đến yên lặng đặt trước mặt cô.

Họa sĩ nhấp chén trà nóng ba ngày nay ông mới lại gặp, không giấu vẻ thích thú, tự rót lấy một chén nữa, nói luôn:

- Ta thỏa thuận thế này. Chuyện dưới xuôi, mười ngày nữa trở lại đây, tôi sẽ kể anh nghe. Tôi sẽ trở lại, danh dự đấy. Tôi cũng muốn biết cái yên lặng lúc một giờ sáng chon von trên cao nó thế nào. Bây giờ có cả ba chúng ta đây, anh hãy kể chuyện anh đi. Sao người ta bảo anh là người cô độc nhất thế gian? Rằng anh “thèm” người lắm?

Anh thanh niên bật cười khanh khách:

- Các từ ấy đều là của bác lái xe. Không, không đúng đâu. Một mình thì anh bạn trên trạm đỉnh Phan-xi-păng ba nghìn một trăm bốn mươi hai mét kia mới một mình hơn cháu. Làm khí tượng, ở được cao thế mới là lí tưởng chứ.

Anh hạ giọng, nửa tâm sự, nửa đọc lại một điều rõ ràng đã ngẫm nghĩ nhiều:

- Hồi chưa vào nghề, những đêm bầu trời đen kịt, nhìn kĩ mới thấy một ngôi sao xa, cháu cũng nghĩ ngay ngôi sao kia lẻ loi một mình. Bây giờ làm nghề này cháu không nghĩ như vậy nữa. Vả, khi ta việc, ta với công việc là đôi, sao gọi là một mình được? Huống chi việc của cháu gắn liền với việc của bao anh em, đồng chí dưới kia. Công việc của cháu gian khổ thế đấy, chứ cất nó đi, cháu buồn đến chết mất. Còn người thì ai mà chả “thèm” hở bác? Mình sinh ra là gì, mình đẻ ở đâu, mình vì ai mà làm việc? Đấy, cháu tự nói với cháu thế đấy. Bác lái xe đi, về Lai Châu cứ đến đây dừng lại một lát. Không vào giờ “ốp” là cháu chạy xuống chơi, lâu thành lệ. Cháu bỗng dưng tự hỏi: Cái nhớ xe, nhớ người ấy thật ra là cái gì vậy? Nếu là nỗi nhớ phồn hoa đô hội thì xoàng. Cháu ở liền trong trạm hằng tháng. Bác lái xe bao lần dừng, bóp còi toe toe, mặc, cháu gan lì nhất định không xuống. Ấy thế là một hôm, bác lái phải thân hành lên trạm cháu. Cháu nói: “Đấy, bác cũng chẳng “thèm” người là gì?”

Anh xoay sang người con gái đang một mắt đọc cuốn sách, một mắt lắng nghe, chân cô đung đưa khe khẽ, nói:

- Và cô cũng thấy đấy, lúc nào tôi cũng có người trò chuyện. Nghĩa là có sách ấy mà. Mỗi người viết một vẻ.

- Quê anh ở đâu thế? - Họa sĩ hỏi.

- Quê cháu ở Lào Cai này thôi. Năm trước, cháu tưởng cháu được đi xa lắm cơ đấy, hóa lại không. Cháu có ông bố tuyệt lắm. Hai bố con cùng viết đơn xin ra lính đi mặt trận. Kết quả: bố cháu thắng cháu một - không. Nhân dịp Tết, một đoàn các chú lái máy bay lên thăm cơ quan cháu ở Sa Pa. Không có cháu ở đấy. Các chú lại cử một chú lên tận đây. Chú ấy nói: nhờ cháu có góp phần phát hiện một đám mây khô mà ngày ấy, tháng ấy, không quân ta hạ được bao nhiêu phản lực Mỹ trên cầu Hàm Rồng. Đối với cháu, thật là đột ngột, không ngờ lại là như thế. Chú lái máy bay có nhắc đến bố cháu, ôm cháu mà lắc “Thế là một - hòa nhé!”. Chưa hòa đâu bác ạ. Nhưng từ hôm ấy cháu sống thật hạnh phúc. Ơ, bác vẽ cháu đấy ư? Không, không, đừng vẽ cháu! Để cháu giới thiệu với bác những người khác đáng cho bác vẽ hơn.

Phải, người họa sĩ già vừa nói chuyện, tay vừa bất giác hí hoáy vào cuốn sổ tì lên đầu gối. Hơn bao nhiêu người khác, ông biết rất rõ sự bất lực của nghệ thuật, của hội họa trong cuộc hành trình vĩ đại là cuộc đời. Ông thấy ngòi bút của ông bất lực trên từng chặng đường đi nhỏ của ông, nhưng nó như là một quả tim nữa của ông, hay chính là quả tim cũ được “đề cao” lên, do đó mà ông khao khát, mà ông yêu thêm cuộc sống. Thế nhưng, đối với chính nhà họa sĩ, vẽ bao giờ cũng là một việc khó, nặng nhọc, gian nan. Làm một bức chân dung, phác họa như ông làm đây, hay rồi vẽ dầu, làm thế nào làm hiện lên được mẫu người ấy? Cho người xem hiểu được anh ta, mà không phải hiểu như một ngôi sao xa? Và làm thế nào đặt được chính tấm lòng của nhà họa sĩ vào giữa bức tranh đó? Chao ôi, bắt gặp một con người như anh ta là một cơ hội hãn hữu cho sáng tác, nhưng hoàn thành được sáng tác còn là một chặng đường dài. Mặc dù vậy, ông đã chấp nhận sự thử thách.

Để khỏi vô lễ, người con trai vẫn ngồi yên cho ông vẽ, nhưng cho là mình không xứng với thử thách ấy, anh vẫn nói:

- Không, bác đừng mất công vẽ cháu! Cháu giới thiệu với bác ông kĩ sư ở vườn rau dưới Sa Pa! Ngày này sang ngày khác ông ngồi im trong vườn su hào, rình xem cách ong lấy phấn, thụ phấn cho hoa su hào. Rồi, để được theo ý mình, tự ông cầm một chiếc que, mỗi ngày chín mười giờ sáng, lúc hoa tung cánh, đi từng cây su hào làm thay cho ong. Hàng vạn cây như vậy. Để củ su hào nhân dân toàn miền Bắc nước ta ăn được to hơn, ngon hơn trước. Ông kĩ sư làm cháu thấy cuộc đời đẹp quá. Bác về Sa Pa vẽ ông ta đi, bác. Hay là, đồng chí nghiên cứu khoa học ở cơ quan cháu ở dưới ấy đấy. Có thể nói đồng chí ấy trong tư thế sẵn sàng suốt ngày chờ sét. Nửa đêm mưa gió rét buốt, mặc, cứ nghe sét là đồng chí choáng choàng chạy ra. Như thế mười một năm. Mười một năm không một ngày xa cơ quan. Không đi đến đâu mà tìm vợ. Đồng chí cứ sợ nhỡ có sét lại vắng mặt mình. Đồng chí đang làm một cái bản đồ sét riêng cho nước ta. Có cái bản đồ ấy thì lắm của lắm bác ạ. Của chìm nông, của chìm sâu trong lòng đất đều có thể biết, quý giá lắm. Trán đồng chí cứ hói dần đi. Nhưng cái bản đồ sét thì sắp xong rồi.

Trong cái lặng im của Sa Pa, dưới những dinh thự cũ kĩ của Sa Pa, Sa Pa mà chỉ nghe tên, người ta đã nghĩ đến chuyện nghỉ ngơi, có những con người làm việc và lo nghĩ như vậy cho đất nước.

Cũng may mà bằng mấy nét, họa sĩ ghi xong lần đầu gương mặt của người thanh niên. Người con trai ấy đáng yêu thật, nhưng làm cho ông nhọc quá. Với những điều làm cho người ta suy nghĩ về anh. Và về những điều anh suy nghĩ trong cái vắng vẻ vòi vọi hai nghìn sáu trăm mét trên mặt biển, cuồn cuộn tuôn ra khi gặp người. Những điều suy nghĩ đúng đắn bao giờ cũng có những vang âm, khơi gợi bao điều suy nghĩ khác trong óc người khác, có sẵn mà chưa rõ hay chưa được đúng. Ví dụ như quan niệm về cái đất Sa Pa mà ông quyết định sẽ chỉ đến để nghỉ ngơi giai đoạn cuối trong đời, mà ông yêu nhưng vẫn còn tránh.

Những băn khoăn ấy làm cho nhà hội họa không nhận xét được gì ở cô con gái ngồi trước mặt đằng kia. Những điều cô cùng nghe, cộng với những điều cô khám phá thấy trên hai trang sách hay đang đọc dở của người con trai làm cô bàng hoàng. Có phải cái ánh sáng trong quyển sách rọi sang, làm cho cô hiểu thêm cuộc sống một mình dũng cảm tuyệt đẹp của người thanh niên, về cái thế giới những con người như anh mà anh kể, và về con đường cô đang đi tới? Có phải cái cảm giác bàng hoàng, đáng lẽ cô phải biết khi cô yêu, bây giờ cô mới biết, giúp cô đánh giá đúng hơn mối tình nhạt nhẽo mà cô đã bỏ, và yên tâm hơn về quyết định của mình? Một ấn tượng hàm ơn khó tả dạt lên trong lòng cô gái. Không phải chỉ vì bó hoa rất to sẽ đi theo cô trong chuyến đi thứ nhất ra đời. Mà vì một bó hoa nào khác nữa, bó hoa của những háo hức và mơ mộng ngẫu nhiên anh cho thêm cô. Và vì một cái gì đó nữa mà lúc này cô chưa kịp nghĩ kĩ. Cô loay hoay tìm trong túi xách. Nhà họa sĩ thì còn trở lại, nhưng cô, trong trời đất Tây Bắc bạt ngàn, trong cuộc đời mông mênh nói chung, chốc nữa, chắc là cô sẽ đi luôn, biến mất, có cái gì tặng lại anh ta để, như anh ta nói, kỉ niệm lần gặp gỡ này. Một cái cỏn con gì rồi ra có thể biến thành một chút xíu dịu dàng, một chút xíu dũng cảm trong cuộc sống của anh ta? Một cuốn sách, một món trang trí nhỏ chẳng hạn? Không, hiện giờ trong cái túi xách của cô không có vật gì như thế.

- Trời ơi, chỉ còn có năm phút!

Chính là anh thanh niên giật mình nói to, giọng cười nhưng đầy tiếc rẻ. Anh chạy ra nhà phía sau, rồi trờ vào liền, tay cầm một cái làn. Nhà họa sĩ tặc lưỡi đứng dậy. Cô gái cũng đứng lên, đặt lại chiếc ghế, thong thả đi đến chỗ bác già.

- Ô! Cô còn quên chiếc mùi soa đây này!

Anh thanh niên vừa vào, kêu lên. Để người con gái khỏi trở lại bàn, anh lấy chiếc khăn tay còn vo tròn cặp giữa cuốn sách tới trả cho cô gái. Cô kĩ sư mặt đỏ ửng, nhận lại chiếc khăn và quay vội đi.

- Chào anh. - Đến bậu cửa, bỗng nhà họa sĩ già quay lại chụp lấy tay người thanh niên lắc mạnh. - Chắc chắn rồi tôi sẽ trở lại. Tôi ở với anh ít hôm được chứ?

Đến lượt cô gái từ biệt. Cô chìa tay ra cho anh nắm, cẩn trọng, rõ ràng, như người ta cho nhau cái gì chứ không phải là cái bắt tay. Cô nhìn thẳng vào mắt anh - những người con gái sắp xa ta, biết không bao giờ gặp ta nữa, hay nhìn ta như vậy.

- Chào anh.

Lần đầu, chính là anh thanh niên quay mặt đi. Anh ấn cái làn vào tay bác già và nói vội vã:

- Cái này để ăn trưa cho bác, cho cô và bác lái xe. Cháu có bao nhiêu là trứng, ăn không xuể. Cháu không tiễn bác và cô ra xe được, vì gần tới giờ “ốp” rồi. Thôi chào bác, chào cô. Bác sẽ trở lại nhé.

Hai ông con theo bậc cấp bước xuống đồi, đến mặt đường nhìn lên, không thấy người con trai đứng đấy nữa. Anh ta đã vào nhà trong. Ông xách cái làn trứng, cô ôm bó hoa to. Lúc bấy giờ, nắng đã mạ bạc cả con đèo, đốt cháy rừng cây hừng hực như một bó đuốc lớn. Nắng chiếu làm cho bó hoa càng thêm rực rỡ và làm cho cô gái cảm thấy mình rực rỡ theo. Hai người lững thững đi về phía chiếc xe đỗ, im lặng rất lâu. Bỗng bác già nhìn chiếc đồng hồ nói một mình:

- Thanh niên bây giờ lạ thật! Các anh chị cứ như con bướm. Mà đã mười một giờ, đến giờ “ốp” đâu? Tại sao anh ta không tiễn mình đến tận xe nhỉ?

Cô gái liếc nhìn bác già một cái rất nhanh, tự nhiên hồi hộp, nhưng vẫn im lặng.
`;
export function Sample() {
  return <Speeder input={SAMPLE_TEXT} />;
}
