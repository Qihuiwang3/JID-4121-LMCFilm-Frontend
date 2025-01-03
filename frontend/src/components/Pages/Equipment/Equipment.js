import React, { useState, useRef } from 'react';
import Button from '../../Button/Button';
import EquipmentTable from '../../Functions/EquipmentTable/EquipmentTable';
import { useNavigate } from 'react-router-dom';

const Equipment = () => {
    const navigate = useNavigate();

    const [isEditMode, setIsEditMode] = useState(false);
    const equipmentTableRef = useRef(null);

    const toggleEditMode = () => {
        if (isEditMode) {
            equipmentTableRef.current.loadRecords();
        }
        setIsEditMode(!isEditMode);
    };

    const handleBack = () => {
        navigate('/ViewEquipment');
    };

    return (
        <div>
            <EquipmentTable
                ref={equipmentTableRef}
                isEditMode={isEditMode}
                toggleEditMode={toggleEditMode}
            />

            <div className="equipment-btn">
                <Button type="back" onClick={() => handleBack()}>Back</Button>
            </div>

        </div>
    );
};

export default Equipment;
