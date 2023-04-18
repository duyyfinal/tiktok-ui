import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, limit = 3) => {
    try {
        const res = await httpRequest.get(`users/search`, {
            params: {
                q,
                limit,
            },
        });
        return res.users;
    } catch (error) {
        console.log(error);
    }
};
