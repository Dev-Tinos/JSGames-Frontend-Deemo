import { useNavigate } from 'react-router-dom';

function GoBack() {
    const navigate = useNavigate();

    return (
        <span  onClick={() => navigate(-1)} class="material-symbols-outlined">
            arrow_back
        </span>
    )
}

export default GoBack