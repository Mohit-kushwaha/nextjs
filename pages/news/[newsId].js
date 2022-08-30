import { useRouter } from 'next/router'
import { Fragment } from 'react';

function DetailPage() 
{
    const router = useRouter()
    const newsId = router.query.newsId;
    return (<Fragment>
        <h1>DetailPage</h1>

    </Fragment>)
}
export default DetailPage
