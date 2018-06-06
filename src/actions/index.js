/**
 * Created by minhhung on 6/6/18.
 */
export const SelectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
};