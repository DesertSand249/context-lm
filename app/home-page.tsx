import { Link } from "react-router";
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "./common/components/ui/table";

const datas = [
    {
        "header": "신규카테",
        "items": [
            "운세",
            "직장인",
            "주식",
            "연애",
            "운동",
            "건강"
        ]
    },
    {
        "header": "생활",
        "items": [
            "요리",
            "청소",
            "정리",
            "인테리어",
            "가구",
            "DIY"
        ]
    },
    {
        "header": "취미",
        "items": [
            "독서",
            "영화",
            "음악",
            "게임",
            "여행",
            "사진"
        ]
    },
    {
        "header": "교육",
        "items": [
            "어학",
            "프로그래밍",
            "자격증",
            "취업",
            "시험",
            "학습"
        ]
    },
    {
        "header": "금융",
        "items": [
            "저축",
            "투자",
            "은행",
            "보험",
            "세금",
            "재테크"
        ]
    },
    {
        "header": "기술",
        "items": [
            "AI",
            "로봇",
            "스마트폰",
            "컴퓨터",
            "가전",
            "전자기기"
        ]
    },
    {
        "header": "건강",
        "items": [
            "다이어트",
            "영양",
            "수면",
            "스트레스",
            "운동",
            "웰빙"
        ]
    }
]

export default function HomePage() {
    return (
        <div className="grid grid-cols-6 gap-2">
            {datas.map((data) => (
                <Table className="col-span-1">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">{data.header}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <Link to={`/category/${data.header}`}>
                            <TableRow key={data.header}>
                                <TableCell>
                                    {data.items.map((item) => (
                                        <div key={item}>{item}</div>
                                    ))}
                                </TableCell>
                            </TableRow>
                        </Link>
                    </TableBody>
                </Table>
            ))}
        </div>
    );
}