/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { useApplicationStore } from '../../store/application';
import { RootApplicationInterface } from '../../store/application/state.interface';
import { HTTP_METHODS } from '../../common/Constants';
import {
    ApiRequest,
    ApiResponseInterface
} from '../../interface/api.interface';

interface State {
    LoadingData: boolean;
    OnError?: Error;
    Data?: any;
}

const defaultResponse = {
    statusCode: 502,
    codeDescription: 'An error has ocurred',
    success: false,
    message: '',
    data: {}
};
interface PropsInterface {
    path: string;
    method: string;
    data?: Object;
}

export const FetchData = async ({ path, method, data }: PropsInterface) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: AxiosResponse<any> = await api({
        method,
        path,
        data
    });
    return response.data;
};

const api = async ({
    method = '',
    path = '',
    token = '',
    data,
    dataHeaders = {}
}: ApiRequest) => {
    return await axios.request({
        method,
        baseURL: `${path}`,
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
            Dataheaders: `${JSON.stringify(dataHeaders)}`
        },
        data
    });
};

export function useCallApi(
    path: string = '',
    method: string = HTTP_METHODS.GET
) {
    const {
        application: { connection }
    }: RootApplicationInterface = useApplicationStore();
    const [status, setStatus] = useState<State>({
        LoadingData: false
    });

    const GetData = async (
        path: string,
        method: string,
        data = {}
    ): Promise<any> => {
        try {
            if (path === '') {
                setStatus({ LoadingData: false, Data: {} });
                return defaultResponse as ApiResponseInterface;
            }
            if (!connection) {
                setStatus({ LoadingData: false, Data: {} });
                if (method === HTTP_METHODS.POST) {
                    return {
                        ...defaultResponse,
                        message: 'Sin conexión'
                    } as ApiResponseInterface;
                }
                //
            }
            setStatus({ LoadingData: true, Data: {} });
            const response: AxiosResponse<any> = await api({
                method,
                path,
                data
            });
            setStatus({ LoadingData: false });
            return response.data;
        } catch (error: any) {
            setStatus({ LoadingData: false, OnError: error });
            const newData = error.response ? error.response.data : error;
            return {
                ...defaultResponse,
                ...newData
            };
        }
    };

    const LoaderElement = () => {
        return <Loader />;
    };

    useEffect(() => {
        if (path !== '' || path != null) {
            const data = {};
            GetData(path, method, data);
        }
    }, [path]);

    return { ...status, GetData, LoaderElement };
}
