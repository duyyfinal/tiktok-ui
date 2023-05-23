import * as httpRequest from '~/utils/httpRequest';

export const suggestAcc = async (key = 'eyeColor', value = 'Blue', limit = 5) => {
    try {
        const res = await httpRequest.get(`users/filter`, {
            params: {
                key,
                value,
                limit,
            },
        });
        return res.users;
    } catch (err) {
        console.log('Lỗi:', err);
    }
};
