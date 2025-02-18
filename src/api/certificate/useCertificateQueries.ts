import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { certificateResponseType } from './certificateResponseTypes.ts';

// ex) 자격증 상세 조회
const useCertificateQueries = () => {
    const { data: certificateData } = useQuery({
        queryKey: ['getCertificateData'],
        queryFn: async () => {
            const response = await axios.get('/api/certificate');
            return response.data;
        },
        onSuccess: (data: certificateResponseType) => console.log(data),
        onError: (error: certificateResponseType) => console.log(error)
    });

    return (
        certificateData
    );
};

export default useCertificateQueries;