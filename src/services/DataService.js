const normalDuplicate = 'https://detect-duplicates-server.herokuapp.com/api/normal/duplicate';
const normalUnique = 'https://detect-duplicates-server.herokuapp.com/api/normal/unique';
const advancedDuplicate = 'https://detect-duplicates-server.herokuapp.com/api/advanced/duplicate';
const advancedUnique = 'https://detect-duplicates-server.herokuapp.com/api/advanced/unique';

export default class DataService {
    findDuplicateForNormal = () =>
        fetch(normalDuplicate).then(
            response => response.json()
        )

    findUniqueForNormal = () =>
        fetch(normalUnique).then(
            response => response.json()
        )

    findDuplicateForAdvanced = () =>
        fetch(advancedDuplicate).then(
            response => response.json()
        )

    findUniqueForAdvanced = () =>
        fetch(advancedUnique).then(
            response => response.json()
        )
}
