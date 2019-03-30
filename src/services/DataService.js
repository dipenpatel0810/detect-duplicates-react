const normalDuplicate = 'http://localhost:8080/api/normal/duplicate';
const normalUnique = 'http://localhost:8080/api/normal/unique';
const advancedDuplicate = 'http://localhost:8080/api/advanced/duplicate';
const advancedUnique = 'http://localhost:8080/api/advanced/unique';

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
