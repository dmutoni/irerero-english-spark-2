# 📙 Irerero English Spark 2

_Irerero English Spark 2_ is the second version of the Irerero app focused on expanding vocabulary, reading comprehension, and early literacy for Rwandan children. It builds on the first version by introducing new storybooks, more interactive visuals, and refined educational features tailored for kids learning English.

---

## 🌟 Project Goals

- Improve early English literacy through digital storybooks and games
- Encourage self-paced, fun learning for children aged 4–8
- Use storytelling, pictures, and sounds to enhance vocabulary and memory
- Reduce barriers by enabling offline use and intuitive design

---

## ✨ Features

| Feature                | Description                                                       |
|------------------------|-------------------------------------------------------------------|
| 📖 New Stories         | Digitally illustrated storybooks with interactive page flipping      |
| 🔊 Audio Narration    | Text-to-speech reads aloud for learners                             |
| 🎮 Word Recognition    | Tap to hear words pronounced individually                            |
| 🧠 Simple Vocabulary  | Use of beginner-friendly English words                              |
| 📲 Device Friendly     | Optimized for phones and tablets                                   |
| 🌐 Offline Access     | Learners don’t need to be connected to the internet to read stories |

---

## 🚀 Getting Started

### ✅ Prerequisites

- Flutter SDK installed
- Android Studio or VS Code
- Android/iOS emulator or real device

### 🧶 Run Locally

```bash
git clone https://github.com/dmutoni/irerero-english-spark-2.git
cd irerero-english-spark-2
flutter pub get
flutter run
```

> 🚀 Use `flutter build apk` or `flutter build ios` for release builds

---

## 🌐 Localization

Supports English, with potential for future Kinyarwanda or French integration.

```dart
MaterialApp(
  supportedLocales: [
    Locale('en', 'US'),
    // Locale('rw', 'RW'), // future support
  ],
)
```

---

## 📂 Folder Structure

```bash
lib/
├── main.dart
├── pages/                # Story pages, home, onboarding
├── widgets/              # Common UI components
├── assets/               # Image, audio assets
├── data/                 # Static story content and models
├── helpers/              # TTS and utilities
```

---

## 💬 Contribution Guide

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to GitHub: `git push origin feature/my-feature`
5. Create a Pull Request

---

## 📢 Contact

**Denyse Mutoni Uwingeneye**  
GitHub: [@dmutoni](https://github.com/dmutoni)  
Country: Rwanda

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for details.

---

## 🙏 Acknowledgements

- Flutter and Dart community
- Kids and educators who tested the first version
- TTS and open educational resources used to power stories and narration

