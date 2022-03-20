const UserSetting = () => {
    const settingName = ["個人檔案", "保存內容", "個人設定", "切換帳戶", "登出"]
    return (
        <ul className="userSetting">
            {
                settingName.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    )
}

export default UserSetting;