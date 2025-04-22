import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.isDarkTheme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div style={{ background: isDarkTheme ? '#333' : '#FFF', color: isDarkTheme ? '#FFF' : '#000', padding: '20px' }}>
            <h1>{isDarkTheme ? 'Темная тема' : 'Светлая тема'}</h1>
            <button onClick={handleToggle}>
                Переключить тему
            </button>
        </div>
    );
};
export default ThemeToggle;