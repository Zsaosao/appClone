import moment from 'moment';
import useFetch from '~/customHook/useFetch';
function Covid() {
    const [data, loading] = useFetch(
        'https://api.covid19api.com/country/vietnam?from=2020-03-01T00:00:00Z&to=2020-03-15T00:00:00Z',
    );
    if (data && data.length > 0) {
        data.map((data) => (data.Date = moment(data.Date, ['MM-DD-YYYY', 'YYYY-MM-DD']).format('DD/MM/YYYY')));
    }

    return (
        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
                {!loading && data ? (
                    data.length > 0 &&
                    data.map((data) => (
                        <tr key={data.ID}>
                            <th>{data.Date}</th>
                            <th>{data.Confirmed}</th>
                            <th>{data.Deaths}</th>
                            <th>{data.Recovered}</th>
                        </tr>
                    ))
                ) : loading ? (
                    <tr>
                        <th>Loading...</th>
                    </tr>
                ) : (
                    <tr>
                        <th>Error...</th>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Covid;
