import {useEffect, useCallback} from "react"
import {format} from "date-fns";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../../store/news/actions";
import {STATUSES} from "../../utils/constants";

export default function News() {
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);
    const newsRequest = useSelector(state => state.news.request);

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    const renderNews = useCallback((newsItem) => (

        <Card style={{width: '18rem'}} key={newsItem.id}>
            <Card.Img variant="top" style={{width: '18rem'}} src={newsItem.imageUrl}/>
            <Card.Body>
                <Card.Title>{newsItem.title}</Card.Title>
                <Card.Text>{newsItem.summary}</Card.Text>
                <Card.Link href={newsItem.url}>Читать</Card.Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    {/*
                    {format(newsItem.updatedAt, 'dd.MM.yyyy')}
                    */}
                </small>
            </Card.Footer>
        </Card>
    ), []);

    if (newsRequest === STATUSES.REQUEST) {
        return <h4>Данные загружаются</h4>
    }

    if (newsRequest === STATUSES.FAILURE) {
        return <h4>Ошибка</h4>
    }

    return (
        <CardColumns>
            {news.map(renderNews)}
        </CardColumns>
    )

}