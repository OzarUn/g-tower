export default function ({ query, route, redirect }) {
    if (query.page_id === '4962' && route.name !== 'privacy') {
        return redirect('/privacy')
    }
} 
